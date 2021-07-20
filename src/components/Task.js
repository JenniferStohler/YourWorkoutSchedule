import { FaTrashAlt } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.text} <FaTrashAlt onClick={onDelete} />
      </h3>
        <p>{task.date}</p>

    </div>
  )
}

export default Task