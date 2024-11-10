import { useEffect, useState } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
    .getAllPersons()
    .then(res => setPersons(res))
    .catch(error => setPersons([{ id: "1", name: error.message }]))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons={[persons, setPersons]} />
      <Numbers persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App