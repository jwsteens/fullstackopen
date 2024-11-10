const Course = ({ course }) => {
    const totalExercises = course.parts.map(part => part.exercises).reduce((partialSum, value) => partialSum + value)
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
            </ul>
            <p>Total of {totalExercises} exercises</p>
        </div>
    )
}

export default Course