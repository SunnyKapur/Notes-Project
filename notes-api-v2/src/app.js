import express from "express";
import NoteRoute from "./routes/note.routes.js"

const app = express();
app.use(express.json());

app.use("/api/notes", NoteRoute)

export default app;
