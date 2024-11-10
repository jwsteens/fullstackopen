import { useState } from "react"

const Form = (props) => {
  const [ persons, setPersons ] = props.persons
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const phoneChangeHandler = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (newName === "") return alert("Please enter a name.")
    if (newPhone === "" || isNaN(newPhone)) return alert("Please enter a phone number.")
    if (persons.find(person => person.name === newName)) return alert(`${newName} is already in the phonebook.`)
    if (persons.find(person => person.number === newPhone)) return alert(`Someone with phone number ${newPhone} is already in the phonebook.`)

    const personObject = {
      name: newName,
      number: newPhone,
      id: String(persons.length + 1)
    }


    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }
  
  return (
    <form onSubmit={addPerson}>
      Add new people to the phonebook:
      <div>
        name: <input onChange={nameChangeHandler} />
      </div>
      <div>
        number: <input onChange={phoneChangeHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}


export default Form