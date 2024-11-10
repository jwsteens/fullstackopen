import { useState } from "react"

const Person = ({ person }) => <li>{person.name} {person.number}</li>

const Numbers = ({persons}) => {
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
					{filteredPersons.map(person => <Person key={person.id} person={person} />)}
        </ul>
      </div>
	)
}

export default Numbers