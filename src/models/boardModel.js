const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        instituteId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'instituteId',
        }
    },
    { 
        timestamps: true 
    },
)

module.exports = mongoose.model('board', boardSchema);