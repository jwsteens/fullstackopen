const Content = ({ course }) => {
    const totalExercises = course.parts.map(part => part.exercises).reduce((partialSum, value) => partialSum + value)
    
    return (
        <div>
            <ul>
                {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
            </ul>
            <p>Total of {totalExercises} exercises</p>
        </div>
    )
}

const Course = ({ course }) => {
    
    return (
        <div>
            <h1>Half Stack application development</h1>
            <Content course={course} />
        </div>
    )
}

export default Course