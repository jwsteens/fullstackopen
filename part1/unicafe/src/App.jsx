import { useState } from 'react'

const Button = ({value, handler, text}) => {
  return (
    <button onClick={() => handler(value + 1)}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total

  if (total === 0) return (
      <p>No feedback given yet. Will you be the first?</p>
    )

  return (
    <>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{average}</td>
      </tr>
      <tr>
        <td>Positive</td>
        <td>{positive}%</td>
      </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p>
        <Button value={good} handler={setGood} text="Good"/>
        <Button value={neutral} handler={setNeutral} text="Neutral"/>
        <Button value={bad} handler={setBad} text="Bad"/>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App