const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        boardId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'board',
            }
        ]
    },
    { 
        timestamps: true 
    },
)

module.exports = mongoose.model('subject', subjectSchema);