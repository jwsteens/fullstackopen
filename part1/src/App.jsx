const Hello = (props) => {
  const age = new Date().getFullYear() - props.year
  console.log(props, age)
  return (
    <>
      <p>Hello, {props.name}!</p>
      <p>You are {age}</p>
    </>
  )
}

const Friends = () => {
  const friends = ["Rens", "Tom", "Luca"]

  return (
    <>
      <p>{friends}</p>
    </>
  )
}

const App = () => {
  console.log("Hello console! From App component!")
  const year = 2003

  return (
    <>
      <h1>Greetings, human</h1>
      <Hello name="Jeroen" year={year}/>
      <Friends/>
    </>
  )
}

export default App