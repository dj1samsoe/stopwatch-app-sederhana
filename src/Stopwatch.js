import React, { useState, useEffect } from "react";
import { RiPlayFill, RiPauseFill, RiStopFill } from "react-icons/ri";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="container mx-auto flex flex-col items-center mt-8 py-20 rounded-md bg-gray-300 shadow-2xl">
      <h1 className="text-4xl font-bold mb-10">Stopwatch App</h1>
      <div className="text-3xl mb-4">
        {new Date(time).toISOString().slice(11, -1)}
      </div>
      <div className="flex gap-4">
        <button
          className="text-2xl bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleStartStop}
        >
          {isRunning ? <RiPauseFill /> : <RiPlayFill />}
        </button>
        <button
          className="text-2xl bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleReset}
        >
          <RiStopFill />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
