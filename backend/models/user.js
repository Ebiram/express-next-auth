const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String
})

UserSchema.statics = {
    checkUsername(username) {
        return this.findOne({ username: username }).then(result => {
            if (result) throw new Error('User Exist')
        })
    },
    validUsername(username) {
        return this.findOne({ username: username }).then(result => {
            if (!result) throw new Error('User not Exist')
        })
    },
    checkEmail(email) {
        return this.findOne({ email: email }).then(result => {
            if (result) throw new Error('Email Exist')
        })
    }
}

module.exports = mongoose.model('User', UserSchema)