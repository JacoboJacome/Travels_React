import { useRef } from "react";
import ListTravels from "./Components/ListTravel";

function App() {
  const form = useRef(null);
  let allTravel = [];
  let travelId = 1;

  const saveTravel = (travels) => {
    localStorage.setItem("TRAVEL", JSON.stringify(travels));
  };
  const handleSubmit = (e) => {
    const formData = new FormData(form.current);
    const data = {
      from: formData.get("from"),
      to: formData.get("to"),
      driver: formData.get("driver"),
      passengers: formData.get("passengers"),
      date: formData.get("date"),
      time: formData.get("time"),
      id: travelId,
    };
    allTravel.push(data);
    saveTravel(allTravel);
    travelId++;
  };
  return (
    <div className="w-screen h-screen bg-gray-100">
      <form ref={form} className="flex flex-wrap">
        <div className=" m-2 p-1 flex flex-auto">
          <label className="font-medium mx-2">From: </label>
          <input
            className="px-2 rounded-md"
            required={true}
            type="text"
            name="from"
            placeholder=" from..."
          />
        </div>
        <div className=" m-2 p-1 flex flex-auto">
          <label className="font-medium mx-2">To: </label>
          <input
            className="px-2 rounded-md"
            required={true}
            type="text"
            name="to"
            aceholder=" to..."
          />
        </div>
        <div className=" m-2 p-1 flex flex-auto">
          <label className="font-medium mx-2">Driver: </label>
          <input
            className="px-2 rounded-md"
            required={true}
            type="text"
            name="driver"
            placeholder=" driver..."
          />
        </div>
        <div className=" m-2 p-1 flex flex-auto">
          <label className="font-medium mx-2">Pasengers: </label>
          <input
            className="px-2 rounded-md"
            required={true}
            type="number"
            name="passengers"
            placeholder=" passengers..."
          />
        </div>
        <div className=" m-2 p-1 flex flex-auto">
          <label className="font-medium mx-2">Date: </label>
          <input
            className="px-2 rounded-md"
            required={true}
            type="date"
            name="date"
          />
        </div>
        <div className=" m-2 p-1 flex flex-auto">
          <label className="font-medium mx-2">time: </label>
          <input
            className="px-2 rounded-md"
            required={true}
            type="time"
            name="time"
          />
        </div>
        <div className="flex w-screen items-center justify-center">
          <button
            className="p-2 font-bold bg-gray-100 rounded-xl shadow-lg shadow-gray-500 hover:bg-white hover:shadow-black"
            onClick={handleSubmit}
          >
            Create Travel
          </button>
        </div>
      </form>
      <ListTravels />
    </div>
  );
}

export default App;
