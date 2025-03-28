const mongoose = require("mongoose");

const mediumSchema = new mongoose.Schema(
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
        ]
    },
    { 
        timestamps: true 
    },
)

module.exports = mongoose.model('medium', mediumSchema);