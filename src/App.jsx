import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(25000);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-lg text-gray-200 p-4">
          Calculate your SIP{" "}
          <span className="text-purple-400 underline">returns</span> with{" "}
          <span className="text-green-500">ease</span> 🥳
        </h1>
      </div>
      <div className="flex items-center justify-center p-9">
        <div className="border-white/20 border p-4 rounded-lg w-8/12">
          <div>
            <div className="flex items-center justify-between">
              <label className="text-white text-lg font-semibold px-3">
                Monthly Investment
              </label>
              <span className="bg-green-500/50 px-9 py-1 rounded-md">
                ₹ {amount}
              </span>
            </div>
            <div className="flex w-full">
              <input
                type="range"
                className="w-96 bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none p-4
  [&::-webkit-slider-thumb]:w-2.5
  [&::-webkit-slider-thumb]:h-2.5
  [&::-webkit-slider-thumb]:-mt-0.5
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:bg-white
  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(125,219,136,1)]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:transition-all
  [&::-webkit-slider-thumb]:duration-150
  [&::-webkit-slider-thumb]:ease-in-out
  [&::-webkit-slider-thumb]:dark:bg-neutral-700

  [&::-moz-range-thumb]:w-2.5
  [&::-moz-range-thumb]:h-2.5
  [&::-moz-range-thumb]:appearance-none
  [&::-moz-range-thumb]:bg-white
  [&::-moz-range-thumb]:border-4
  [&::-moz-range-thumb]:border-green-600
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:transition-all
  [&::-moz-range-thumb]:duration-150
  [&::-moz-range-thumb]:ease-in-out

  [&::-webkit-slider-runnable-track]:w-full
  [&::-webkit-slider-runnable-track]:h-2
  [&::-webkit-slider-runnable-track]:bg-gray-100
  [&::-webkit-slider-runnable-track]:rounded-full
  [&::-webkit-slider-runnable-track]:dark:bg-neutral-700

  [&::-moz-range-track]:w-full
  [&::-moz-range-track]:h-2
  [&::-moz-range-track]:bg-gray-100
  [&::-moz-range-track]:rounded-full"
                id="basic-range-slider-usage"
                aria-orientation="horizontal"
                min={500}
                step={500}
                max={10000000}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
