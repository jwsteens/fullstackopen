import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total

  if (total === 0) {
    return (
      <p>No feedback given yet. Will you be the first?</p>
    )
  }

  return (
    <p>
      Good: {good}<br/>
      Neutral: {neutral}<br/>
      Bad: {bad}<br/>
      Total: {total}<br/>
      Average: {average}<br/>
      Positive: {positive}%
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App