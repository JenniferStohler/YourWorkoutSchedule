const AddTask = () => {
  return (
    <form className="add-form mt-5">
          <div className="form-control w-1/2 flex mx-auto bg-white rounded-md">
          <div className="p-5 flex flex-col min-w-full">
                <label htmlFor="workout" className="font-medium text-black"
                  >Workout</label
                >
                <input
                  type="text"
                  id="workout"
                className="w-full py-2 border mt-3 border-gray-300 rounded-md"
                title="Add Workout"
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
                />
              </div>
              <input type='submit' value='Add Task' className='btn btn-block' />
            </div>
            </div>
          </form>
  )
}

export default AddTask