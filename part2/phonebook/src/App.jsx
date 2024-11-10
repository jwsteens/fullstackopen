import { useState } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1" }
  ]) 
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons={[persons, setPersons]} />
      <Numbers persons={persons} />
    </div>
  )
}

export default App