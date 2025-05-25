import mongoose from "mongoose"

const userSchema = ({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: [true, "please provide an email"],
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isPaid:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.Schema.User || mongoose.model("User", userSchema)

export default User