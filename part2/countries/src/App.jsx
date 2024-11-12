import { useState } from 'react'
import './App.css'
import List from './components/List'
import Country from './components/Country'

const Search = () => {

  return (
    <form>
      Search countries<br/>
      <input/>
    </form>
  )
}

const App = () => {
  const [ query, setQuery] = useState('')
  const [ data, setData ] = useState({})

  return (
    <div>
      <Search />
      <List data={data}/>
      <Country data={data}/>
    </div>
  )
}

export default App
