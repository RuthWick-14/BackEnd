// const express = require('express');
import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send("Server is ready.");
});
//get a list of jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id : 1,
            title : "A joke.",
            content : "This is a joke." 
        },
        {
            id : 2,
            title : "Another joke.",
            content : "This is another joke." 
        },
        {
            id : 3,
            title : "third joke.",
            content : "This is 3rd joke." 
        },
        {
            id : 4,
            title : "fourth joke.",
            content : "This is 4th joke." 
        },
        {
            id : 5,
            title : "fifth joke.",
            content : "This is 5th joke." 
        },
    ]
    res.send(jokes);
})
const port = process.env.PORT || 3000; //it will find port in .env, if not found (OR) use 3000.

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    
});