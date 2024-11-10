const Note = ({ note, toggleImportance }) => {
    return (
      <li>
        {note.content}
        <button onClick={toggleImportance}>{note.important ? 'Mark not important' : 'Mark important'}</button>
      </li>
  )
}

export default Note