const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { 
        timestamps: true 
    },
)

module.exports = mongoose.model('institute', instituteSchema);