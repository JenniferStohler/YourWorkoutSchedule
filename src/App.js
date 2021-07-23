import { GiWeightLiftingUp } from 'react-icons/gi'
import Tasks from './components/Tasks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from "react"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"





function App() {
  
  const [tasks, setTasks] = useState([])
  //HOW TO USE AN EVENT LISTENER TO FETCH TASKS
  useEffect(() => {

    const getTasks = async() => {
      const tasksServer = await fetchTasks()
      setTasks(tasksServer)
    }
    getTasks()
  }, [])
//FETCH TASKS
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
//FETCH TASK
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
//ADD TASK
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // HOW TO DELETE AND KEEP DELETED ON PAGE REFRESH
  const deleteTask = async (id) => {
    
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
//HOW TO TOGGLE
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }
    
    const res = await fetch(`localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <div className="App container mx-auto mt-3 font-thin">
      
      <Router>
        <h1 className="text-5xl text-black text-center">
        <GiWeightLiftingUp className="inline-block text-black align-top"/>
        Your Daily Workout Schedule
        </h1>
         <AddTask onAdd={addTask} />
      
      <div>
      <div className="bg-white-300 p-6 rounded-lg shadow-lg">
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Workouts to Show')}
            <Route path='/about' component={About} />
          <Footer />
        </div>
      </div>
      </Router>
      </div>
    
  );
}

export default App;
