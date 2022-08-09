const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    });
})

router.get('/addProject', ensureAuthenticated,(req,res)=>{
    res.render('AddProject',{
        user: req.user
    });
});


router.get('/manageProject', ensureAuthenticated,(req,res)=>{
    res.render('ManageProjects',{
        user: req.user
    });
});

router.get('/projectDetail', ensureAuthenticated,(req,res)=>{
    res.render('ProjectDetails',{
        user: req.user
    });
});

module.exports = router; 