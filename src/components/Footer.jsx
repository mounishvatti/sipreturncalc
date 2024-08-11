import React from 'react'

function Footer() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-between p-4 md:p-9">
    <p className="text-white/50 text-sm">
      Made with ❤️ by{" "}
      <a href="https://github.com/mounishvatti" className="text-green-300/50">
        Mounish Vatti
      </a>
    </p>
  </div>
  )
}

export default Footer