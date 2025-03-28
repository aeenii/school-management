const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        InstitutId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'institute',
        },
        boardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'board',
        },
        mediumId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'medium',
        },
        classId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'class',
        },
        standerdId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'standerd',
        },
        subjectId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'subject',
            }
        ]
    },
    { 
        timestamps: true 
    },
)

module.exports = mongoose.model('class', classSchema);