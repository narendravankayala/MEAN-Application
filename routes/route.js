const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


//Getting the contacts from the database
router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err, contacts){
        //res.json({msg:'in revoltution'});
        res.json(contacts);

    });
    //res.send("Retrieving the contact list");

});

//Adding contacts to the database
router.post('/contact',(req, res, next)=>{
    let newContact = new Contact({

        firstName : req.body.firstName,
        lastName  : req.body.lastName,
        mobileNumber: req.body.mobileNumber
    })
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
    
});


//Deleting contacts from the database
router.delete('/contact/:id',(req, res, next)=>{
    Contact.remove({_id : req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result)
        }
    });

    
});

module.exports = router;

