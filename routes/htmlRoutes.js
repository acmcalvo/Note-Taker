// The following HTML routes should be created:
// * `GET /notes` should return the `notes.html` file.
// * `GET *` should return the `index.html` file.

// const express = require('express'); 
const path = require('path');

module.exports = (router) => {
 // HTML GET Requests



router.get('/notes', (req ,res) => {
     res.sendFile(path.join(__dirname, '../public/notes.html' ));

    });

router.get('*', (req ,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html' ));
   
       });

router.get('/index', (req ,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html' ))
   
    });

};

// module.exports = router; 