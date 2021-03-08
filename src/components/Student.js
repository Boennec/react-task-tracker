import { FaTimes } from 'react-icons/fa'

const Task = ({ student , onDelete, onToggle}) => {
    return (
        <div className={`student ${student.reminder ?
        'reminder' : ''}`} onDoubleClick={() =>
        onToggle(student.id)}>
            <h3>{student.text}  <FaTimes style={{ color:'red', cursor:'pointer' }}
            onClick={() =>onDelete(student.id)} /> </h3>
            <p>{student.day}</p>
        </div>
    )
}

export default Task
