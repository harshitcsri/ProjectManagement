const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectLeadName: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true,
        default: 'project'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;