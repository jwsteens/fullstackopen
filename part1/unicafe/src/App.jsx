import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total

  return (
    <div>
      <p>
        Good: {good}<br/>
        Neutral: {neutral}<br/>
        Bad: {bad}<br/>
        Total: {total}<br/>
        Average: {average}<br/>
        Positive: {positive}%
      </p>
    </div>
  )
}

export default App