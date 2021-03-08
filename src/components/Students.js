import student from './student'


const Tasks = ( { students, onDelete, onToggle }) => {
    return (
        <>
        {tasks.map((student, index) => (
        <Task key={index} task={student}
        onDelete={onDelete}
        onToggle={onToggle} />
        ))}
        </>
    )
}

export default students
