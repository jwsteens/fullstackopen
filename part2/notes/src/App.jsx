import { useState, useEffect } from 'react'
import Note  from './components/Note'
import axios from 'axios'
import noteService from './services/notes'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('A new note...')
  const [importantNotesOnly, setImportantNotesOnly] = useState(false)

  useEffect(() => {
    noteService
      .getAll()
      .then(res => setNotes(res))
      .catch(error => {
        setNotes([{ id: "1", content: error.message }])
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      important: Math.random() < .5,
      id: String(notes.length + 1)
    }

    noteService
      .create(noteObject)
      .then(res => {
        setNotes(notes.concat(res))
        setNewNote('')
      })
      .catch(() => {})
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)    
  }

  const toggleNoteImportance = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find( n => n.id === id )

    noteService
      .update(id, { ...note, important: !note.important })
      .then(res => {
        const newNotes = notes.map(n => n.id === id ? res : n)
        setNotes(newNotes)
      })
      .catch(() => {})
  }

  const notesToShow = importantNotesOnly ? notes.filter(note => note.important) : notes

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setImportantNotesOnly(!importantNotesOnly)}>Show {importantNotesOnly ? "all" : "important"} notes</button>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleNoteImportance(note.id)} /> )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App