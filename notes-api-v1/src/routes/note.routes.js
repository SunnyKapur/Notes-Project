import express from "express";
import { createNoteController } from "../controller/note.controllers.js";

let router = express.Router();

// @routes POST/api/notes
// @description Create a new note need title and description in the request body
router.post("/", createNoteController)


export default router;
