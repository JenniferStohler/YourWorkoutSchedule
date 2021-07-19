import { GiWeightLiftingUp } from "react-icons/gi"


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <div className="bg-red-300 p-6 rounded-lg shadow-lg">
      <h1 className="text-5xl bg-black text-white">
        <GiWeightLiftingUp className="inline-block text-white align-top"/>
        Your Workout Schedule
        </h1>
        <div className="mt-5">
        <div className="w-1/2 flex mx-auto bg-white rounded-md">
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
                  >Date</label
                >
                <input
                  type="text"
                  id="date"
                  className="w-full py-2 border mt-3 border-gray-300 rounded-md"
                  title="Add Date"
                />
          </div>
          <div className="mb-5 flex flex-col min-w-full">
                <label htmlFor="time" className="font-medium text-black"
                  >Time</label
                >
                <input
                  type="text"
                  id="time"
                  className="w-full py-2 border mt-3 border-gray-300 rounded-md"
                  title="Add Time"
                />
              </div>
          <button className="align-right text-2xl bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" title="Schedule Workout">
            Add Workout
          </button>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
