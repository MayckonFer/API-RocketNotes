const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const notesRoutes = Router();

const notesControlles = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesControlles.create);
notesRoutes.get("/:id", notesControlles.show);
notesRoutes.delete("/:id", notesControlles.delete);
notesRoutes.get("/", notesControlles.index);

module.exports = notesRoutes;
