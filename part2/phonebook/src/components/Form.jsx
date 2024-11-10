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
    if (newPhone === "") return alert("Please enter a phone number.")
    if (persons.find(person => person.name === newName)) return alert(`${newName} is already in the phonebook.`)
    if (persons.find(person => person.phone === newPhone)) return alert(`Someone with phone number ${newPhone} is already in the phonebook.`)

    const personObject = {
      name: newName,
      phone: newPhone,
      id: String(persons.length + 1)
    }


    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }
  
  return (
    <form onSubmit={addPerson}>
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