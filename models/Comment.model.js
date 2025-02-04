const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Comment", commentSchema);