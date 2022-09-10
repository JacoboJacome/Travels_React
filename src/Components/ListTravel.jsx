import React, { useEffect, useState } from "react";
import ItemTravel from "./ItemTravel";

const ListTravels = () => {
  const [travel, setTravel] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTravel([]);
    let data = JSON.parse(localStorage.getItem("TRAVEL"));
    setTravel(data);
  }, [travel]);

  return (
    <div className="flex flex-wrap">
      {travel
        ? travel.map((travel) => (
            <ItemTravel
              key={travel.id}
              from={travel.from}
              to={travel.to}
              driver={travel.driver}
              passengers={travel.passengers}
              date={travel.date}
              time={travel.time}
              setCompleted={setCompleted}
              completed={completed}
            />
          ))
        : null}
    </div>
  );
};

export default ListTravels;
