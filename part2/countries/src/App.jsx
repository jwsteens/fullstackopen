import { useState } from 'react'
import './App.css'
import List from './components/List'
import Country from './components/Country'
import { useEffect } from 'react'
import countryService from './services/countries'

const Search = ({setQuery}) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      Search countries<br/>
      <input onChange={event => {
        setQuery(event.target.value.toLowerCase())
      }}/>
    </form>
  )
}

const App = () => {
  const [ query, setQuery ] = useState('')
  const [ data, setData ] = useState([])

  useEffect(() => {
    countryService
      .getCountries()
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <Search setQuery={setQuery}/>
      <List query={query} data={data}/>
      <Country query={query} data={data}/>
    </div>
  )
}

export default App
