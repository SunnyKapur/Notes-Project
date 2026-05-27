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

export let getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NoteModel.find();

    return res.status(200).json({
      message: "Notes fetched successfully",
      notes: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export let updateNoteController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(404).json({
        message: "Notes Id note found",
      });

    const { description } = req.body;

    if (!description) {
      return res.status(400).json({
        message: "Description are required",
      });
    }

    if (description.trim().length < 10) {
      return res.status(400).json({
        message: "Description must be at least 10 characters long",
      });
    }

    let note = await NoteModel.findById(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    note.description = description;
    await note.save();

    return res.status(200).json({
        message: "Note updated successfully",
        note
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
