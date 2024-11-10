import { useState, useEffect } from 'react'
import Note  from './components/Note'
import axios from 'axios'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('A new note...')
  const [importantNotesOnly, setImportantNotesOnly] = useState(false)

  useEffect(() => {
    console.log("effect");
    axios
      .get('http://localhost:3001/notes')
      .then(res => setNotes(res.data))
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      important: Math.random() < .5,
      id: String(notes.length + 1)
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)    
  }

  const notesToShow = importantNotesOnly ? notes.filter(note => note.important) : notes

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setImportantNotesOnly(!importantNotesOnly)}>Show {importantNotesOnly ? "all" : "important"} notes</button>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} /> )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App