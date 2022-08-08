const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/addProject', (req,res)=>{
    res.render('addProject');
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

router.get('/getProjects', (req,res)=>{
    res.render('getProjects');
})
module.exports = router; 