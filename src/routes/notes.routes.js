const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesControlles = new NotesController();

notesRoutes.get("/", notesControlles.index);
notesRoutes.post("/:user_id", notesControlles.create);
notesRoutes.get("/:id", notesControlles.show);
notesRoutes.delete("/:id", notesControlles.delete);

module.exports = notesRoutes;
