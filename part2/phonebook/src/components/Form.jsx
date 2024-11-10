import { useState } from "react"

const Form = (props) => {
  const [ persons, setPersons ] = props.persons
  const [newName, setNewName] = useState('')

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      id: String(persons.length + 1)
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    }
  
  return (
    <form onSubmit={addName}>
      <div>
        name: <input onChange={nameChangeHandler}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}


export default Form