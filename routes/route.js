const express = require('express');
const {v4} = require('uuid');
const user = require('./users');

const router = express.Router();

router.get('/getUser', (req, res) => {
    console.log(user);
    res.status(200).json(user);
});

router.post('/createUser', (req, res) => {

    if(req.body != null)
    {
        const users = req.body;
        const id = v4();
        const userWithid = {id , ...users};
        user.push(userWithid);
        res.send(`${user.name} is added`);
    }else{
        res.send(`There is some issue with postingg data`);
    }

});

module.exports = router;