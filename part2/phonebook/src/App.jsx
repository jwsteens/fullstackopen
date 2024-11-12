import { useEffect, useState } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import personService from './services/persons'

const Message = ({ message }) => {
  if (!message) return null
  const style = {
    color: 'darkgreen',
    fontStyle: 'bold',
    borderStyle: 'solid',
    borderColor: 'green',
    padding: '10px',
    borderRadius: '4px',
    background: '#cadeca'
  }

  return <p style={style}>{message}</p>

}

const Error = ({ message }) => {
  if (!message) return null
  const style = {
    color: 'darkred',
    fontStyle: 'bold',
    borderStyle: 'solid',
    borderColor: 'darkred',
    padding: '10px',
    borderRadius: '4px',
    background: '#cc8383'
  }

  return <p style={style}>{message}</p>
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [ message, setMessage ] = useState('')
  const [ error, setError ] = useState('')

  useEffect(() => {
    personService
    .getAllPersons()
    .then(res => setPersons(res))
    .catch(error => setPersons([{ id: "1", name: error.message }]))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Error message={error} />
      <Form persons={[persons, setPersons]} messageHandler={setMessage}/>
      <Numbers persons={persons} setPersons={setPersons} errorHandler={setError}/>
    </div>
  )
}

export default App