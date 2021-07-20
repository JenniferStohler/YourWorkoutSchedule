const tasks = [
  {
  id: 1,
  text: 'Pilates',
  date: '07/19',
  time: '6:00am',
  reminder: false,
  },
  {
    id: 2,
    text: 'Bicep Curls',
    date: '07/19',
    time: '6:30am',
    reminder: false,
  }
]

const Tasks = () => {
  return (
    <div>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}{task.date}{task.time}</h3>))}
    </div>
  )
}

export default Tasks