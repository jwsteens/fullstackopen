const Content = ({ course }) => {
    
    return (
        <div>
            <ul>
                {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
            </ul>
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