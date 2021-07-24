import { useState } from 'react'


const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a workout')
      return;
    }

    onAdd({ text, date, reminder })
    setText('')
    setDate('')
    setReminder(false)
  }
  return (
    <form className="add-form mt-5 border-black" onSubmit={onSubmit}>
      <div className="p-6 rounded-lg">
          <div className="form-control w-1/2 flex mx-auto bg-white shadow-lg rounded-md">
          <div className="p-5 flex flex-col min-w-full">
                <label htmlFor="workout" className="font-medium text-black"
                  >Workout</label
                >
                <input
                  type="text"
                  id="workout"
                className="w-full py-2 border mt-3 border-gray-300 rounded-md"
            title="Add Workout"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mb-5 flex flex-col min-w-full">
                <label htmlFor="date" className="font-medium text-black"
                  >Date and Time</label
                >
                <input
                  type="text"
                  id="date"
                  className="w-full py-2 border mt-3 border-gray-300 rounded-md"
              title="Add Date and Time"
              value={date}
              onChange={(e) => setDate(e.target.value)}
                />
          </div>
          <div className="form-control-checkbox mb-5 flex flex-col min-w-full">
                <label htmlFor="reminder" className="font-medium text-black"
                  >Set Reminder</label
                >
                <input
                  type="checkbox"
                  id="reminder"
              title="Set Reminder"
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
              checked={reminder}
                />
              </div>
              <input type='submit' value='Submit Your Workout!' className='btn btn-block bg-blue-200' title='Submit Your Workout' />
            </div>
        </div>
        </div>
          </form>
  )
}

export default AddTask