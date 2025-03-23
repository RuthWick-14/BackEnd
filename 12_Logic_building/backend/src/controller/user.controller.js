import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refres token field from response
    // check for user user creation 
    // return response
    
    const {fullName, email, username, password} = req.bod
    console.log("email: ", email);

    if (fullName === "") {
        throw new ApiError(400, "fullname is required.")
    }
})

export { registerUser }