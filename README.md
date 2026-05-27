# Notes

## Features
-Create note
-Read note
-Edit note 
-Delete note


## Create api POST /api/notes (for creating a Note)
### perform Validation on title and description
### if validation pass then create Note

## Create api GET /api/notes (for listing all the notes)
### user noteMode and find all notes in DB.

## Create api PATCH /api/notes/update/:id (For updating a note with its _id in params)
### performs Validation on id( is note even exists) and description
### if validation pass then update the description property 
### Save the note

