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
      <div className="flex flex-row justify-start gap-4 pb-6 pt-14 pl-8">
        <button
          id="sip"
          className={`text-white rounded-full p-2 px-4 text-md ${
            active === "sip" ? "bg-green-500/30" : ""
          }`}
          onClick={handleClick}
        >
          SIP
        </button>
        <button
          id="lumpsum"
          className={`text-white rounded-full p-2 px-4 text-md ${
            active === "lumpsum" ? "bg-green-500/30" : ""
          }`}
          onClick={handleClick}
        >
          Lumpsum
        </button>
        <button
          id="topup"
          className={`text-white rounded-full p-2 px-4 text-md ${
            active === "topup" ? "bg-green-500/30" : ""
          }`}
          onClick={handleClick}
        >
          Top Up
        </button>
      </div>
      {state === "sip" && <DisplaySIP />}
      {state === "lumpsum" && <DisplayLumpsum />}
      {state === "topup" && <DisplayTopup />}

      <Footer />
    </>
  );
}

export default App;