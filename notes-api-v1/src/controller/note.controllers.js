import NoteModel from "../model/note.model.js";

export let createNoteController = async (req, res) => {
  try {
    let { title, description } = req.body;

    // --validation
    if (!title || !description)
      return res.status(400).json({
        error: "Title and Description are required",
      });

    if (title.trim().length < 3 || description.trim().length < 10) {
      return res.status(400).json({
        error:
          title.trim().length < 3
            ? "Title must be at least 3 character long"
            : "Description must be at least 10 character long",
      });
    }

    const newNote = await NoteModel.create({ title, description });

    return res.status(201).json({
      message: "create note successfully",
      note: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
