require('dotenv').config()
const express = require('express')  // old style express module
// import express from "express" //new style express module
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("ruthvikpc")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>this is YT</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})