import TaskModal from "@/models/taskModal";
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try{
        await connect()
        const {dueDate, description} = await request.json()
        const newCall = await TaskModal.create({dueDate, description})
        return NextResponse.json(newCall, {status: 201})
    }catch(error: any){
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
