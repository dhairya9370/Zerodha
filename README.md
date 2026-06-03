this is a simple Zerodha clone, which has landing page of Zerodha and "Kite" app functionalities

git clone https://github.com/dhairya9370/Zerodha.git

//make sure u have NODE.JS already setup on your system

cd frontend
npm install
npm run dev
//frontend will run on localhost:5173

cd ../dashboard
npm install
npm start

//dashboard will run on localhost:3000

cd ../backend
npm install
cp .env .env.example
//place your fields in .env
npm start

//backend will run on localhost:3002

now u can go to any of these ports on your browser

go on landing page -> see details ->signup ->fill details for Kite -> Buy Stocks -> sell Stocks -> view Holdings,  Positions -> Log out ->  signIn ->repeat!
