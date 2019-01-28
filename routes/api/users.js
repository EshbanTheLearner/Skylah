const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User Model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req,res)=>{
    // Form Validation
    const { errors, isValid } = validateRegisterInput(req.body);

   // Check Validation
   if (!isValid){
       return res.status(400).json(errors);
   } 

   const email = req.body.email;
   const password = req.body.password;

   // Find user by email
   User.findOne({ email }).then(user => {
       // Check if user exists
       if(!user){
           return res.status(404).json({ emailnotfound: "Email not found"});
       }

       // Check password
       bcrypt.compare(password, user.password).then(isMatch => {
           if(isMatch){
               // User matched
               // Create JWT Payload
               const payload = {
                   id: user.id,
                   name: user.name
               };
            
               // Sign Token
               jwt.sign(
                   payload,
                   keys.secretOrKey,
                   {
                       expiresIn: 31556926 // 1 year
                   },
                   (err, token) => {
                       res.json({
                           success: true,
                           token: "Bearer " + token
                       });
                   }
               );
           }else{
               return res
               .status(400)
               .json({ passwordincorrect: "Password Incorrect" });
           }
       });
   });
});

module.exports = router;