// require('dotenv').config({path: './env'})  // it ruins the consistency of code so alternate approach is i line 6-8

import dotenv from "dotenv"
import connectDB from "./db/server.js";
import {app} from "./app.js"

dotenv.config({
    path : "./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log`Server is running at port: ${process.env.PORT}`;
    })
})
.catch((error)=>{
    console.log("MongoDB CONNECTION FAILED!!",err);
    
})














// first approach
/*
(async()=>{
    try {
        await mongoose.connect(`${proces.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERR: ",error);
            throw error
            
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/