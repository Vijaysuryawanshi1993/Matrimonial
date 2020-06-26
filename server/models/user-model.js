const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        age: { type: Number, required: true },
        sex: { type: String, required: true },
        subject: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('user', User)