import { connect } from "@/dbconfig/dbconfig";
import Task from "@/models/taskModal";
import { NextRequest, NextResponse} from "next/server";

//update by id
export async function PATCH(request: NextRequest, {params}: {params: {id: string}}){
    try {
        await connect()
        const reqBody = await request.json()
        const update = await Task.findByIdAndUpdate(params.id, reqBody, {new:true})

        if(!update){
            return NextResponse.json({error: "task not found"}, {status: 404})
        }
        return NextResponse.json(update)
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 400});
        }
        return NextResponse.json({error: "An unknown error occurred"}, {status: 400});
    }
}

//delete by id
export async function DELETE({params}:{params : {id: string}}){
    try {
        await connect()
        const deletedTask = await Task.findByIdAndDelete(params.id)

        if(!deletedTask){
            return NextResponse.json({error: "Task not found"}, {status:404})
        }
        return NextResponse.json(deletedTask);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 400});
        }
        return NextResponse.json({error: "An unknown error occurred"}, {status: 400});
    }
}