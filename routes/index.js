const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
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
router.get('/register', (req, res) => {
    res.render('register');
})
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        user: req.user
    });
})

router.get('/addProject', ensureAuthenticated, (req, res) => {
    res.render('AddProject', {
        user: req.user
    });
});


router.get('/manageProject', ensureAuthenticated, (req, res) => {
    res.render('ManageProjects', {
        user: req.user
    });
});

router.get('/projectDetail', ensureAuthenticated, (req, res) => {
    res.render('ProjectDetails', {
        user: req.user
    });
});

router.get('/addUser', ensureAuthenticated, (req, res) => {
    res.render('AddUser', {
        user: req.user
    })

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