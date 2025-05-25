// /app/api/tasks/route.ts
import { connect } from "@/dbconfig/dbconfig";
import Task from "@/models/taskModal";
import {NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const tasks = await Task.find({});
    return NextResponse.json(tasks);
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
