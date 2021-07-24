import { FaTrashAlt } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="container border-black">
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 className="p-3 mx-40">
        {task.text} <FaTrashAlt onClick={() => onDelete(task.id)} />
        {task.date}
      </h3>
    </div>
    </div>
  )
}

export default Task