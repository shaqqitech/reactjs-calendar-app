// src/Calendar.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const goToToday = () => {
    const today = new Date();
    setDate(today);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Calendar App</h1>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">
            {date.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <div className="space-x-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={goToToday}
            >
              Today
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => onChange(null)}
            >
              Clear
            </button>
          </div>
        </div>
        <Calendar key={date.toString()} onChange={onChange} value={date} />
      </div>
    </div>
  );
}

export default App;
