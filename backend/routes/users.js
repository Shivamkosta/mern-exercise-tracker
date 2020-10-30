const router = require('express').Router();
const { json } = require('body-parser');
let User = require('../models/user');

router.route('/').get((req,res)=>{
    User.find()
    .then(res.status(400).json({
        
    }))
    .catch(err=>{
        res.json(err)
    })
})