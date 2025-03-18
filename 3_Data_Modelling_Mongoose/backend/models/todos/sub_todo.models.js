import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // username : String,
        // email : String,
        // isActive : Boolean,   we can write like this but less productive

        username : {
            type : String,     
            required : true,    //this data is must required
            unique: true,       //this username should be unique
            lowercase : true,   //username should in lowercase
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        password : {
            type : String,
            required : true /*[true, "password is required."]*/ 
        }
    }, {timestamps: true}
);

export const User = mongoose.model("User", userSchema); //model(what data?, on what basis it is created?)