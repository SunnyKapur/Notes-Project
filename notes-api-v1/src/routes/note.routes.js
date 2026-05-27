import express from "express";
import { createNoteController, getAllNotesController } from "../controller/note.controllers.js";

let router = express.Router();

// @routes POST/api/notes
// @description Create a new note need title and description in the request body
router.post("/create", createNoteController);

router.get("/", getAllNotesController);

export default router;
