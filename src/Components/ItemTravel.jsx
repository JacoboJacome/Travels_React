import React, { useState } from "react";

const ItemTravel = ({ from, to, driver, passengers, date, time }) => {
  const [moreDetails, setMoreDetails] = useState(false);
  return (
    <>
      {moreDetails ? (
        <div className="flex justify-center items-center font-medium flex-col w-auto rounded-xl p-2 m-2 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-white hover:shadow-black">
          <p className="mx-2 ">from: {from} </p>
          <p className="mx-2 ">to: {to}</p>
          <p className="mx-2 ">driver: {driver}</p>
          <p className="mx-2 ">passengers: {passengers}</p>
          <p className="mx-2 ">date: {date}</p>
          <p className="mx-2 ">time: {time}</p>
          <button
            className="bg-gray-100 rounded-xl shadow-lg shadow-gray-500 hover:bg-white hover:shadow-black font-medium"
            onClick={() => setMoreDetails(!moreDetails)}
          >
            <p className="mx-2 ">Less details</p>
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center font-medium flex-col w-auto rounded-xl p-2 m-2 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-white hover:shadow-black">
          <p className="mx-2 ">from: {from} </p>
          <p className="mx-2 ">to: {to}</p>
          <button
            className="bg-gray-100 rounded-xl shadow-lg shadow-gray-500 hover:bg-white hover:shadow-black font-medium"
            onClick={() => setMoreDetails(!moreDetails)}
          >
            <p className="mx-2 ">More Details</p>
          </button>
        </div>
      )}
    </>
  );
};

export default ItemTravel;
