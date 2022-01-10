const fs = require("fs");

module.exports = (app) => {
  let notes;
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;

      res.json(JSON.parse(data));
    });
  });

  app.post('/api/notes', (req, res) => {
    let newNote = req.body;

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);

      notes.push(newNote);

      notes.forEach((item, i) => {
        item.id = 1 + i;
      });

      fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
      });
    });

    res.json(newNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let delNoteId = req.params.id;

    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw err;
      let notes = JSON.parse(data);

      notes.forEach((thisNote, i) => {
        if (thisNote.id.toString() === delNoteId) {
          notes.splice(i, 1);
        }
      });

      fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
      });
    });
    res.send('file');
  });
};
