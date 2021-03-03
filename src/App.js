import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


 const App = () => {
  const [tasks, setTasks] = useState([
        
    {
        id: 1,
        text: 'doctors',
        day: 'feb 5th',
        reminder: true,
        },
    {
        id: 2,
        text: 'meeting',
        day: 'feb 6th',
        reminder: true,
        },
    {
        id: 3,
        text: 'shopping',
        day: 'feb 8th',
        reminder: false,
        },
])


//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length >0 ?<Tasks tasks={tasks} onDelete=
      {deleteTask} /> : 'no tasks to show'}
    </div>
  )
} 




export default App;
