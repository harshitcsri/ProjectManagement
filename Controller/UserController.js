const bcrypt = require("bcrypt");
const User = require('../models/user');

async function saveUser(req, res, next) {
    try {
        const getUser = await User.find({email: req.body.email});
        if(getUser.length > 0)
                return res.json({ status: 409, message: 'DUPLICATE_EMAIL' });
        else{
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            const save =  new User(req.body)
            const resposne = await save.save();
            if (resposne)
                return res.json({ status: 200, message: 'USER_DETAIL_SAVED', data: save });
            else
                return res.json({ status: 400, message: 'USER_NOT_SAVED' })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: 500, message: 'ERROR_OCCURED', error })
    }

}



module.exports = { saveUser: saveUser }