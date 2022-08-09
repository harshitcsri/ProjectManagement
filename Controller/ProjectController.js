const Project = require('../models/Project');
const User = require('../models/user');
const bcrypt = require("bcrypt");

async function saveProject(req, res, next) {
    try {
        const getLeadName = await User.find({name: req.body.ProjectLead});
        if(getLeadName.length < 1){
            return res.json({ status: 400, message: 'UNKNOWN_PROJECT_LEAD_NAME' });
        }else{
            const getProjects = await Project.find({ProjectName: req.body.ProjectName});
            if(getProjects.length > 0){
                if(getProjects[0].ProjectEmail == req.body.ProjectEmail){
                    return res.json({ status: 409, message: 'DUPLICATE_EMAIL' });
                }
                return res.json({ status: 409, message: 'DUPLICATE_NAME' });
            }
            else{
                const salt = await bcrypt.genSalt(10);
                req.body.ProjectPassword = await bcrypt.hash(req.body.ProjectPassword, salt);
                const save =  new Project(req.body)
                const resposne = await save.save();
                if (resposne)
                    return res.json({ status: 200, message: 'PROJECT_DETAIL_SAVED', data: save });
                else
                    return res.json({ status: 400, message: 'PROJECT_NOT_SAVED' })
            }
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: 500, message: 'ERROR_OCCURED', error })
    }

}

async function getProjects(req, res, next) {
    try{
        console.log(req.query)
        const project = await Project.find(req.query);
        if(project){
            return res.json({ status: 200, message: 'PROJECT_FETCHED', data: project })
        }else{
            return res.json({ status: 400, message: 'PROJECT_NOT_FETCHED' })
        }
    }catch(error){
        console.log(error)
        return res.json({ status: 500, message: 'ERROR_OCCURED', error })
    }
}

module.exports = { saveProject, getProjects }