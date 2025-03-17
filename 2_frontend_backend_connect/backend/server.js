// const express = require('express');
import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send("Server is ready.");
});

const port = process.env.PORT || 3000; //it will find port in .env, if not found (OR) use 3000.
