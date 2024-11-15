import { useState } from 'react'

// Functions

function indexOfMax(array) {
  let maxIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) maxIndex = i
  }

  return maxIndex
}

// Components

const NextButton = ({ handler, anecdotes }) => {
  return ( <button onClick={() => {
    const index = Math.floor(Math.random() * (anecdotes.length))
    handler(index)
}}>New anecdote</button> )
}

const VoteButton = ({ selected, votes, handler }) => {
  return ( <button onClick={() => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    handler(newVotes)
  }}>Vote for anecdote</button>)
}

const MostPopularAnecdote = ({ anecdotes, votes }) => {
  return (
    <>
      <h1>Most popular anecdote</h1>
      <p>
        {anecdotes[indexOfMax(votes)]}
      </p>
    </>
  )
}

// App

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <p>
        {anecdotes[selected]}<br/>
        Votes: {votes[selected]}
      </p>
      <VoteButton selected={selected} votes={votes} handler={setVotes} />
      <NextButton handler={setSelected} anecdotes={anecdotes} />
      <MostPopularAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App