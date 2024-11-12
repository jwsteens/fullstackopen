import { useState } from "react"
import personService from '../services/persons'



const Form = (props) => {
  const [ persons, setPersons ] = props.persons
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const { messageHandler } = props

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const phoneChangeHandler = (event) => {
    setNewPhone(event.target.value)
  }

  const addNewPerson = ( personObject ) => {
    personService
    .createPerson(personObject)
    .then(data => {
      setPersons(persons.concat(data))
      setNewName('')
      setNewPhone('')
      messageHandler(`New person added!`)
      setTimeout(() => messageHandler(null), 5000)
    })
  }

  const checkIfInPhonebook = ( person ) => {
    return persons.find(queryPerson => queryPerson.name === person.name)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (newName === "") return alert("Please enter a name.")
    if (newPhone === "" || isNaN(newPhone)) return alert("Please enter a phone number.")
    if (persons.find(person => person.number === newPhone)) return alert(`Someone with phone number ${newPhone} is already in the phonebook.`)

    const personObject = {
      name: newName,
      number: newPhone
    }

    const queryPerson = checkIfInPhonebook(personObject)
    if (!checkIfInPhonebook(personObject)) return addNewPerson(personObject)

    if (!window.confirm(`${personObject.name} is already in the phonebook. Do you want to overwrite their phone number (${queryPerson.number})?`)) return
    personService
      .updatePerson(queryPerson.id, personObject)
      .then(data => {
        const newPersons = [...persons]
        newPersons[persons.findIndex(indexingPerson => indexingPerson.id === data.id)] = data
        setPersons(newPersons)
        setNewName('')
        setNewPhone('')
        messageHandler(`Phone number updated!`)
        setTimeout(() => messageHandler(null), 5000)
      })

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