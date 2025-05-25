import bcrypt from "bcryptjs";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        const user = await User.find({email})
        if(user){
            return NextResponse.json(
               { error: "user already exist"},
               {status: 400}
            )
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username, email,
            password: hashedPassword
        })
        await newUser.save()
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message},{status:400})
        }
        return NextResponse.json({error: "An unknown error occurred"},{status:400})
    }
}