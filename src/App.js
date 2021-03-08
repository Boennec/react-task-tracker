import { useState, useEffect } from 'react'
import Header from './components/Header'
import Students from './components/Students'
import AddStudent from './components/AddStudent'


 const App = () => {
   const [showAddStudent, setShowAddTask]= useState (false)
  const [tasks, setTasks] = useState([])


useEffect(() => {
  const getTasks = async () => {
    const studentsFromServer = await fetchTasks()
    setTasks(studentsFromServer)
  }

getTasks()

}, [])


//fetch tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

//add task
const addTask = async (student) => {
  const res = fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(student),

  })

  const data = await  res.json()

  setTasks([...students, data])


  /* const id = Math.floor(Math.random() * 10000) + 1
const newTask = { id, ...task}
setTasks([...tasks, newTask]) */
}


//delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })


  setTasks(students.filter((students) => students.id !==id))
}



//toggle reminder
const toggleReminder = (id) => {
  setTasks(students.map((student) => student.id === id
  ? {...student, reminder: !student.reminder}: student))

}


  return (
    <div className='container'>
      <Header 
      onAdd={() => setShowAddTask
      (!showAddstudent)} 
      showAdd={showAddStudent}
      />
      {showAddStudent && <AddTask onAdd={addStudent}/>}
      {students.length >0 ? (
      <Tasks tasks={students} onDelete=
      {deleteStudent} onToggle={toggleReminder}/> 
      ) : ('no students to show')}
    </div>
  )
  }


export default App;
