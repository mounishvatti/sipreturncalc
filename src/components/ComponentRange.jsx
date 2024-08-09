import React from 'react'
import PropTypes from 'prop-types';

function ComponentRange({labeltext, units, param1, setParam1, minval, maxval, stepcount}) {
  return (
    <>
    <div className="flex items-center justify-between">
    <label className="text-white/70 text-lg font-semibold px-3">
      {labeltext}
    </label>
    <div className="bg-green-300/10 rounded-md px-5 py-1 text-green-300/70 border-2 border-green-300/30 flex justify-between">
        <div>{param1}</div>
      <div>{units}</div>
    </div>
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
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(120,199,130,1)]
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
[&::-webkit-slider-runnable-track]:bg-green-300
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-neutral-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-green-300
[&::-moz-range-track]:rounded-full"
      id="basic-range-slider-usage"
      aria-orientation="horizontal"
      min={minval}
      step={stepcount}
      max={maxval}
      value={param1}
      onChange={(e) => setParam1(e.target.value)}
    />
  </div>
  </>
  )
}

ComponentRange.propTypes = {
  labeltext: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  param1: PropTypes.number.isRequired,
  setParam1: PropTypes.func.isRequired,
  minval: PropTypes.number.isRequired,
  maxval: PropTypes.number.isRequired,
  stepcount: PropTypes.number.isRequired,
}

export default ComponentRange