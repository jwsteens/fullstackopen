const Numbers = ({persons}) => {
	console.log(persons);
	

	return (
		<div>
        <h2>Numbers</h2>
        <ul>
          {persons.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
      </div>
	)
}

export default Numbers