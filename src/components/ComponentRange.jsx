import React from "react";
import PropTypes from "prop-types";
import "/src/App.css";

function ComponentRange({
  labeltext,
  units,
  param1,
  setParam1,
  minval,
  maxval,
  stepcount,
}) {
  return (
    <div className="w-full max-w-lg p-6 m-2 rounded-lg shadow-sm">
      {/* Label */}
      <div className="flex justify-between items-center mb-4">
        <label className="text-gray-300 text-md md:text-lg font-sans font-semibold">
          {labeltext}
        </label>
        {/* Styled Input Field */}
        <div className="flex items-center bg-stone-700 px-3 py-1 rounded-md shadow-sm">
          <input
            type="number"
            className="w-20 bg-transparent text-right text-amber-300 font-bold focus:outline-none"
            min={minval}
            max={maxval}
            step={stepcount}
            value={param1}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= minval && value <= maxval) {
                setParam1(value);
              }
            }}
          />
          <span className="text-gray-400 text-sm ml-2">{units}</span>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full">
        <input
          type="range"
          className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer focus:outline-none accent-amber-300"
          min={minval}
          step={stepcount}
          max={maxval}
          value={param1}
          onChange={(e) => setParam1(Number(e.target.value))}
        />
        {/* Slider Track Style */}
        <div
          className="rounded-lg bg-amber-300"
          style={{
            width: `${((param1 - minval) / (maxval - minval)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

ComponentRange.propTypes = {
  labeltext: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  param1: PropTypes.number.isRequired,
  setParam1: PropTypes.func.isRequired,
  minval: PropTypes.number.isRequired,
  maxval: PropTypes.number.isRequired,
  stepcount: PropTypes.number.isRequired,
};

export default ComponentRange;