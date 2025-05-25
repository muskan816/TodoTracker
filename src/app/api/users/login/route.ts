import bcrypt from "bcryptjs";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

connect()

export async function GET(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "user does not exist"},{status: 400})
        }

        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "invalid password"},{status: 400})
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "login successfully",
            success: true
        })
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Make it secure in production
            sameSite: "strict", // Set SameSite to prevent CSRF
            maxAge: 24 * 60 * 60 * 1000,
        })
        return response
    } catch (error: any) {
        console.log("error during login", error)
        return NextResponse.json({error: error.message},{status: 400})
    }
}