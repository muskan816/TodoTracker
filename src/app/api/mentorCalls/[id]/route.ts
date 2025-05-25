import mentorModalSchema from "@/models/mentorNotesModal";
import { connect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";

export async function DELETE ({params}:{params : {id: string}}){
    try {
        await connect()
        const deleted = await mentorModalSchema.findByIdAndDelete(params.id)
        if(!deleted){
            return NextResponse.json({error:"note not found"},{status: 400})
        }
        return NextResponse.json({message: "deleted successfully!"})
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message},{status: 400})
        }
        return NextResponse.json({error: "An unknown error occurred"},{status: 400})
    }
}