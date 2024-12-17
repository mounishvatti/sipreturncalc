import Navbar from "./components/Navbar";
import DisplaySIP from "./components/DisplaySIP";
import DisplayLumpsum from "./components/DisplayLumpsum";
import DisplayTopup from "./components/DisplayTopup";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("sip");
  const [active, setActive] = useState("sip");

  const handleClick = (e) => {
    setState(e.target.id);
    setActive(e.target.id);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center gap-6 p-8">
        <button
          id="sip"
          className={`transition-all duration-300 ease-in-out text-white rounded-full py-3 px-6 text-lg font-semibold hover:bg-amber-300/70 focus:outline-none ${
            active === "sip" ? "bg-amber-300/30" : "bg-transparent"
          }`}
          onClick={handleClick}
        >
          SIP
        </button>
        <button
          id="lumpsum"
          className={`transition-all duration-300 ease-in-out text-white rounded-full py-3 px-6 text-lg font-semibold hover:bg-amber-300/70 focus:outline-none ${
            active === "lumpsum" ? "bg-amber-300/30" : "bg-transparent"
          }`}
          onClick={handleClick}
        >
          Lumpsum
        </button>
        <button
          id="topup"
          className={`transition-all duration-300 ease-in-out text-white rounded-full py-3 px-6 text-lg font-semibold hover:bg-amber-300/70 focus:outline-none ${
            active === "topup" ? "bg-amber-300/30" : "bg-transparent"
          }`}
          onClick={handleClick}
        >
          Top Up
        </button>
      </div>

      {/* Display components based on the active state */}
      <div className="w-full mx-auto m-4">
        {state === "sip" && <DisplaySIP />}
        {state === "lumpsum" && <DisplayLumpsum />}
        {state === "topup" && <DisplayTopup />}
      </div>

      <Footer />
    </>
  );
}

export default App;