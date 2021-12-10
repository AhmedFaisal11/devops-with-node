const { v4 } = require('uuid');
// const  { uuid } = require('uuidv4');

const mockdata = [
    {
        id: v4(),
        name: "omer",
        email: "omer@gmail.com"
    },
    {
        id: v4(),
        name: "jack",
        email: "jack@gmail.com"
    },
    {
        id: v4(),
        name: "ahmed",
        email: "ahmed@gmail.com"
    },
    {
        id: v4(),
        name: "zayn",
        email: "zayn@gmail.com"
    },
]

module.exports = mockdata;