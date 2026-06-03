const { User } = require('../models/User');
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
    try {
        // 1. Grab the token from cookies
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ status: false, message: "No token provided" });
        }
        // 2. Verify the token synchronously (cleaner and safer)
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        // 3. Look up the user in the database using the decoded ID
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ status: false, message: "User no longer exists" });
        }

        // 4. Success response
        return res.status(200).json({ status: true, username:user.username,email:user.email });

    } catch (err) {
        // This catch block cleanly handles both bad JWT signatures, expired tokens, and DB dropouts!
        console.error("Verification error:", err.message);
        return res.status(401).json({ status: false, message: "Invalid or expired token" });
    }
};