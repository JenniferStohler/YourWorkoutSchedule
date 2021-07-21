import { GiWeightLiftingUp } from 'react-icons/gi'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from "./components/AddTask"





function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Pilates',
    date: '07/19',
    time: '6:00am',
    reminder: true,
    },
    {
      id: 2,
      text: 'Bicep Curls',
      date: '07/19',
      time: '6:30am',
      reminder: false,
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <div className="bg-red-300 p-6 rounded-lg shadow-lg">
      <h1 className="text-5xl text-black text-center">
        <GiWeightLiftingUp className="inline-block text-black align-top"/>
        Your Daily Workout Schedule
        </h1>
        <AddTask />
        
        </div>
      <div>
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Workouts to Show')}
      </div>
    </div>
    
  );
}

export default App;
