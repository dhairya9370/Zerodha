require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors({
    origin: ["http://localhost:3000","http://hoppscotch.io","https://hoppscotch.io"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(cookieParser());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;
const { Holding } = require('./models/Holding');
const { Position } = require('./models/Position');
const { Order } = require('./models/Order');
const { createSecretToken } = require("./utils/SecretToken");
const { User } = require('./models/User');
const { userVerification } = require('./middlewares/Auth');

app.post('/',userVerification);

app.get('/holdings', async (req, res) => {
    let data = await Holding.find({});
    res.send(data);
});
app.get('/positions', async (req, res) => {
    let data = await Position.find({});
    res.send(data);
});
app.post('/placeOrder', async (req, res) => {
    const { name, qty, price, mode } = req.body;

    // 1. Log the order in history
    const order = new Order({ name, qty, price, mode });
    await order.save();

    if (mode === "BUY") {
        // Create a distinct holding block for this purchase transaction
        const holding = new Holding({ name, qty, avg: price, price: price, net: "+0.00%", day: "+0.00%" });
        await holding.save();
        return res.send({ message: "Buy Order placed successfully" });

    } else if (mode === "SELL") {
        // Fetch all holdings for this stock, sorted from oldest to newest (FIFO)
        let holdings = await Holding.find({ name }).sort({ _id: 1 });

        // Calculate total available quantity across all matching documents
        const totalAvailableQty = holdings.reduce((sum, h) => sum + h.qty, 0);

        // Validation: Block order if trying to sell more than they own
        if (totalAvailableQty < qty) {
            return res.status(400).send({
                message: `Insufficient holdings. You want to sell ${qty} but only own ${totalAvailableQty}.`
            });
        }

        let remainingSellQty = qty;

        for (let holding of holdings) {
            if (remainingSellQty <= 0) break; // Finished exhausting the sale

            if (holding.qty <= remainingSellQty) {
                // This entire block is consumed by the sale
                remainingSellQty -= holding.qty;
                await Holding.findByIdAndDelete(holding._id); // Wipe it out completely
            } else {
                // This holding block contains more than enough to fulfill the rest of the sale
                holding.qty -= remainingSellQty;
                remainingSellQty = 0; // Sale is completely satisfied
                await holding.save(); // Save the leftover balance back to DB
            }
        }

        return res.send({ message: "Sell Order placed successfully and holdings updated" });
    }
});
app.get('/orders', async (req, res) => {
    let data = await Order.find({});
    res.send(data);
});
app.post('/sell', async (req, res) => {
    const { name } = req.body;
    let data = await Holding.find({ name });
    if (data.length == 0) {
        res.send({ success: false, message: "You do not have this stock in your holdings" });
    } else {
        // Fixed Weighted Average Logic for your GET/POST /sell confirmation route:
        let totalCost = 0;
        let totalQty = 0;
        let currentLTP = data[data.length - 1].price;

        data.forEach((h) => {
            totalCost += (h.avg * h.qty); // Multiplies price by quantity for actual capital spent
            totalQty += h.qty;
        });

        let trueWeightedAvg = totalCost / totalQty;

        res.send({
            success: true,
            details: { name, qty: totalQty, avg: trueWeightedAvg.toFixed(2), price: currentLTP }
        });
    }
});
app.post('/signup', async (req, res) => {
    try {
        const { email, username, password, createdAt } = req.body;
        const existing = await User.findOne({ email });
        if (existing) {
            return res.json({ success: false, message: "Email Already Registered!" });
        }
        const user = await User.create({ email, username, password, createdAt });
        const token = createSecretToken(user._id.toString());
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });
        return res.status(201).json({ success: true, message: "User Registered Successfully",user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Failed to signup" });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Email not registered!" });
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password' })
        }
        const token= createSecretToken(user._id.toString());
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            path:'/'
        });
        return res.json({ success: true,token, message: "Login Successful",user });
    }catch(err){
        console.log(err);
        return res.json({success:false,message:"Login Failed"});
    }
});
app.post('/logout', (req, res) => {
  // Clear the cookie by passing its exact name ('token')
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true in production
    sameSite: 'strict',
    path: '/' // Ensure this matches the path used when creating the cookie
  });

  return res.status(200).json({ success: true, message: "Logged out successfully" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB", err);
        });
});
