import mongoose from "mongoose"

const mentorModalSchema = ({
    description:{
        type: String,
        required: [true, "Please enter your mentor calls notes"]
    },
})

const MentorNotes = mongoose.Schema.MentorNotes || mongoose.model("MentorNotes", mentorModalSchema)

export default MentorNotes