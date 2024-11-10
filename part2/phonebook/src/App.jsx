import { useState } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  personService
    .getAllPersons()
    .then(res => setPersons(res))

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons={[persons, setPersons]} />
      <Numbers persons={persons} />
    </div>
  )
}

export default App