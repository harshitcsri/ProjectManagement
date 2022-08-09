const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        unique: true
    },
    ProjectLead: {
        type: String,
    },
    ProjectEmail: {
        type: String,
        unique: true
    },
    ProjectPassword: {
        type: String
    },
    ProjectStatus: {
        type: String,
        default: 'Active'
    }
});

const Project= mongoose.model('Project',ProjectSchema);

module.exports = Project;