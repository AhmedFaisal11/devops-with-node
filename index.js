const express = require('express');
const helmet = require('helmet');
const userRoute = require('./routes/route');
const hpp = require('hpp');

// port 
const port = process.env.PORT || 3000;

// express instance 
const app = express();


// middlewares
app.use(helmet());
app.use(hpp());
app.use(express.static('./public'));
app.use(express.json());
app.use('/users' , userRoute);


// Route For Testing Purposes
// app.get('/' , async (req , res) => {
    
// });


// starting the server
app.listen(port , () => {
    console.log(`Server is Running on http://localhost:${port}`);
});