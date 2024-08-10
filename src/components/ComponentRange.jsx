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
    <>
      <div className="flex items-center justify-between mb-4">
        <label className="text-white/70 text-md md:text-lg font-sans font-semibold px-3">
          {labeltext}
        </label>
        <div className="rounded-sm px-4 border-none flex items-center space-x-2" style={{ backgroundColor: "rgb(27,53,45)", color: "rgb(82, 179, 144)" }}>
          <span className="text-lg font-medium">{param1}</span>
          <span className="text-sm">{units}</span>
        </div>
      </div>
      <div className="flex items-center w-full max-w-lg mx-auto mb-10">
        <input
          type="range"
          className="slider w-full bg-transparent cursor-pointer appearance-auto focus:outline-none"
          min={minval}
          step={stepcount}
          max={maxval}
          value={param1}
          onChange={(e) => setParam1(e.target.value)}
        />
      </div>
    </>
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
