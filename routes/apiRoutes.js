// Dependencies
const router = require("express").Router();
const store = require("./../db/store");

// routes

router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post("/notes", function (req, res) {
    store
        .addNote(req.body)
        .then((notes) => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.delete("/notes/:title", function (req, res) {
    store
        .deleteNotes(req.params.title)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});

module.exports = router;