import { GiWeightLiftingUp } from "react-icons/gi"


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <div class="bg-red-300 p-6 rounded-lg shadow-lg">
      <h1 className="text-5xl bg-black text-white">
        <GiWeightLiftingUp className="inline-block text-white align-top"/>
        Your Workout Schedule
        </h1>
        <div class="mb-5 flex flex-col min-w-full">
                <label for="workout" class="font-medium text-black"
                  >Workout</label
                >
                <input
                  type="text"
                  id="workout"
                  class="w-full py-2 border mt-3 border-gray-300 rounded-md"
          />
          <div class="mb-5 flex flex-col min-w-full">
                <label for="date" class="font-medium text-black"
                  >Date</label
                >
                <input
                  type="text"
                  id="date"
                  class="w-full py-2 border mt-3 border-gray-300 rounded-md"
                />
          </div>
          <div class="mb-5 flex flex-col min-w-full">
                <label for="time" class="font-medium text-black"
                  >Time</label
                >
                <input
                  type="text"
                  id="timee"
                  class="w-full py-2 border mt-3 border-gray-300 rounded-md"
                />
              </div>
          <button class="align-right text-2xl bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add Workout
          </button>
              </div>
        </div>
    </div>
  );
}

export default App;
