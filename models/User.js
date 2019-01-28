const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema 
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
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

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res)=>{
    // Form Validation
    const { errors, isValid } = validRegisterInput(req.body);

    // Check Validation
    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({ email: "Email already exists"});
        }

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        // Hash password
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(newUser.password, salt, (err, hash)=>{
                if(err) throw err;
                newUser.password = hash;
                newUser
                .save()
                .then(user=>res.json(user))
                .catch(err=>console.log(err));
            });
        });
    });
});

module.exports = User = mongoose.model("users", UserSchema);