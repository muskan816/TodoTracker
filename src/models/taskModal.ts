import mongoose, {Document} from "mongoose"

export interface ITask extends Document{
    taskName: string
    description: string
    dueDate: string
    priority: string
}

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Please enter your task name"],
    },
    description: {
        type: String,
        required: [true, "Please enter your task description"],
    },
    dueDate: {
        type: String,
        required: [true, "Please select a date"],
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium",
        required: [true, "Please select priority level"]
    },
}, { timestamps: true })

const Task = mongoose.models.Task || mongoose.model<ITask>("Task", taskSchema)

export default Task