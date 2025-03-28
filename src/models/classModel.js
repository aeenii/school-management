const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
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

module.exports = mongoose.model('class', classSchema);