const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
//login page
router.get('/', (req,res)=>{
    res.render('login');
})

router.get('/dashboard', (req, res) => {
    const userId = req.session.userid;
    if(userId)
        res.render('dashboard', { id : userId });
    else
        res.render('login');
})

//register page
router.get('/register', (req,res)=>{
    const userId = req.session.userid;
    if(userId)
        res.render('register', { id : userId });
    else
        res.render('login')
})

router.get('/addProject', (req,res)=>{
    const userId = req.session.userid;
    if(userId)
        res.render('AddProject', { id : userId })
    else
        res.render('login')
});


router.get('/manageProject', (req,res)=>{
    const userId = req.session.userid;
    if(userId)
        res.render('ManageProjects',{ id : userId });
    else
        res.render('login')
});

router.get('/projectDetail', (req,res)=>{
    const userId = req.session.userid;
    if(userId)
        res.render('ProjectDetails', { id : userId });
    else
        res.render('login')
});

router.get('/addUser', (req,res)=>{
    const userId = req.session.userid;
    if(userId)
        res.render('AddUser', { id : userId });
    else
        res.render('login');
});

module.exports = router; 