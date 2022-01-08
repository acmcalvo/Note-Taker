// DEPENDENCIES
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