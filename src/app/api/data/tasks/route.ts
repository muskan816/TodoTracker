import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbconfig/dbconfig"
import Task from "@/models/taskModal"

export async function POST(request: NextRequest) {
    try {
        await connect()

        const {taskName,description,dueDate,priority} = await request.json()
        const newTask = await Task.create({
            taskName, description,dueDate,priority
        })
        return NextResponse.json(newTask, {status: 201})
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message},{status : 400})
        }
        return NextResponse.json({error: "An unknown error occurred"},{status : 400})
    }
}

