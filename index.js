const express = require('express');
const helmet = require('helmet');

// port 
const port = process.env.PORT || 3000;

// express instance 
const app = express();


// middlewares
app.use(helmet());


// Route For Testing Purposes
app.get('/' , async (req , res) => {
    
    res.json({
        Message: "Server is Running",
        Status: "Perfect"
    });
});


// starting the server
app.listen(port , () => {
    console.log(`Server is Running on http://localhost:${port}`);
});