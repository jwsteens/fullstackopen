import { useState } from "react"
import personService from '../services/persons'

const deletePerson = (person, setPersons) => {
  if (!window.confirm(`Are you sure you want to delete ${person.name}?`)) return

  personService
    .deletePerson(person.id)
    .then(res => {
      personService
        .getAllPersons()
        .then(res => {
          setPersons(res)
        })
    })
    .catch(error => console.log(error))
}

const Person = ({ person, persons, setPersons }) => {
  return (
    <div>
      <li className="note">{person.name} {person.number}</li>
      <button onClick={() => deletePerson(person, setPersons)}>Delete</button>
    </div>
  )
} 

const Numbers = ({ persons, setPersons }) => {
	const [ newSearch, setNewSearch ] = useState("")

	const searchHandler = (event) => {
		setNewSearch(event.target.value.toLowerCase())
	}

	const filteredPersons = newSearch ? persons.filter(person => {
		const lowercaseName = person.name.toLowerCase()
		return lowercaseName.includes(newSearch)
	}) : persons
  
	return (
		<div>
        <h2>Numbers</h2>
				<div>
					Search:
					<input onChange={searchHandler}/>
				</div>
        <ul>
					{filteredPersons.map(person => <Person key={person.id} person={person} setPersons={setPersons} />)}
        </ul>
      </div>
	)
}

export default Numbers