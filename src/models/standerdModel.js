const mongoose = require("mongoose");

const standerdSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        classId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'class',
            }
        ],
        subjectId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'subject',
            }
        ],
    },
    { 
        timestamps: true 
    },
)

module.exports = mongoose.model('standerd', standerdSchema);