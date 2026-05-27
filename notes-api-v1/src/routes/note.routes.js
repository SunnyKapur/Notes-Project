import express from "express";
import { createNoteController, getAllNotesController, updateNoteController } from "../controller/note.controllers.js";

let router = express.Router();

// @routes POST/api/notes/create
// @description Create a new note need title and description in the request body
router.post("/create", createNoteController);

// @routes GET /api/notes
// @description Get all notes
router.get("/", getAllNotesController);

// @routes Patch /api/update/:id
router.patch("/update/:id",updateNoteController)



export default router;
