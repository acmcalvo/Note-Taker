const fs = require("fs");
const path = require("path");

const notes = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(notes));

  app.post("/api/notes", (req, res) => {
    let id = notes.length + 1;
    console.log(id);
    req.body.id = parseInt(id);
    console.log(req.body);
    notes.push(req.body);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      "utf8",
      (err,
      (jsonString) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json(JSON.parse(jsonString));
      })
    );
  });
  app.delete("/api/notes/:id", (req, res) => {
    let id = notes.length - 1;
    req.body.id = parseInt(id);
    notes.pop(req.params.body);
    res.json({ ok: true });
  });
};
