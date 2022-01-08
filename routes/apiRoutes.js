// The following API routes should be created:
// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, 
// and then return the new note to the client. 

// const notes = [];
const fs = require('fs');
const path = require('path');
// This package will be used to generate our unique ids: https://www.npmjs.com/package/nanoid#js
// const { nanoid } = require('nanoid');
const notes = require('../db/db.json');
// const router = require('express').Router();

module.exports = (app) => {

    // retrieve stored notes from database
    
    app.get('/api/notes', (req, res) => res.json(notes));

    // app.get('/api/notes', (req, res) => {
    //     fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, jsonString => {
    //         if (err) {
    //             console.log(err)
    //             return;
    //         }
    //         res.json(JSON.parse(jsonString));
    //     }));
    // });

    // app.post('/api/notes', (req, res) => {
    //     fs.readFile(path.join(__dirname, 'db.json'), 'utf8',
    //         function (error, response) {
    //             if (err) {
    //                 console.log(error)
    //                 return;
    //             }
    //             res.json(JSON.parse(jsonString));
    //         })
    // });

   
    
    
    // post new note to server
    app.post('/api/notes', (req, res) => {    
        let id = notes.length + 1
        console.log(id);
        req.body.id = parseInt(id);
        // console.log(req.body)
        notes.push(req.body);
        fs.writeFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, jsonString => {
            if (err) {
                console.log(err)
                return;
            }
            res.json(JSON.parse(jsonString));
        }));
    });
  
    // const noteTitle = req.body;
    // const noteText = req.body;
    // const newNote = {
    //     id: "noteId".id,
    //     tite: 'noteTitle'.title,
    //     text: 'noteText'.text,
    // };
    // note.push(newNote);
    // res.json(newnote);
      
        app.delete('/api/notes/:id', (req, res) => {
        let id = notes.length - 1
        req.body.id = parseInt(id);
        notes.pop(req.params.body);
        res.json({ ok: true });
        // res.json({ notes });
    });

}; 