import { useCallback, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ComponentRange from "./components/ComponentRange";
import { Doughnut } from "react-chartjs-2";
import moneysvgrepo from '/src/assets/moneysvgrepo.svg'

function App() {
  const [amount, setAmount] = useState(25000); // Monthly investment
  const [returns, setReturns] = useState(8); // Annual return rate in percentage
  const [duration, setDuration] = useState(10); // Investment duration in years
  const [investedAmount, setInvestedAmount] = useState(0); // Total invested amount
  const [estReturn, setEstReturn] = useState(0); // Estimated return
  const [futureValue, setFutureValue] = useState(0); // Future value of SIP

  const calculateFutureValue = useCallback(() => {
    const monthlyRate = returns / 12 / 100; // Convert annual rate to monthly and percentage to decimal
    const totalInstallments = duration * 12; // Total number of installments (months)

    // Future value of SIP formula
    const fv =
      amount *
      ((Math.pow(1 + monthlyRate, totalInstallments) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setFutureValue(Math.round(fv));
  }, [amount, returns, duration]);

  const calculateInvestedAmount = useCallback(() => {
    setInvestedAmount(Math.round(amount * duration * 12));
  }, [amount, duration]);

  const calculateEstimatedReturn = useCallback(() => {
    setEstReturn(Math.round(futureValue - investedAmount));
  }, [futureValue, investedAmount]);

  useEffect(() => {
    calculateFutureValue();
    calculateInvestedAmount();
    calculateEstimatedReturn();
  }, [
    amount,
    returns,
    duration,
    calculateFutureValue,
    calculateInvestedAmount,
    calculateEstimatedReturn,
  ]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const data = {
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        data: [investedAmount, estReturn],
        backgroundColor: ["rgb(102, 60, 112)", "rgb(255, 199, 132)"],
        hoverBackgroundColor: ["rgb(82, 50, 92)", "rgb(235, 179, 112)"], // Optional: colors on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ₹${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  const MyComponent = () => {
    return (
      <div style={{ width: "300px", height: "300px" }}>
        <Doughnut data={data} options={options} />
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="font-sans">
        <h1 className="text-lg text-gray-200 p-4 pt-6">
          <span className="bg-green-900/30 rounded-full px-7 py-2 border-2 border-green-300/30">
            Calculate your SIP{" "}
            <span className="text-purple-400">returns</span> with{" "}
            <span className="text-green-500">ease</span> 🥳
          </span>
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between pt-32 font-sans">
        <div className="border-white/20 border p-8 rounded-lg w-1/2">
          <ComponentRange
            labeltext="Monthly Investment (INR)"
            units="INR"
            param1={amount}
            setParam1={setAmount}
            minval={0}
            maxval={1000000}
            stepcount={500}
          />
          <ComponentRange
            labeltext="Expected Return Rate p.a (%)"
            units="%"
            param1={returns}
            setParam1={setReturns}
            minval={1}
            maxval={30}
            stepcount={0.1}
          />
          <ComponentRange
            labeltext="Time Period (Yr)"
            units="Yr"
            param1={duration}
            setParam1={setDuration}
            minval={1}
            maxval={40}
            stepcount={1}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between p-9 w-1/2">
        <div>
          <h1 className="text-white/50 p-3">
            Invested Amount{" "}
            <span className="text-white/80 font-semibold">
              ₹{formatNumber(investedAmount)}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-white/50 p-3">
            Estimated Return{" "}
            <span className="text-white/80 font-semibold">
              ₹{formatNumber(estReturn)}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-white/50 p-3">
            Total Returns{" "}
            <span className="text-white/80 font-semibold">
              ₹{formatNumber(futureValue)}
            </span>
          </h1>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-between p-9">
        <MyComponent />
      </div> */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-between p-9">
          <p className="text-white/80 text-lg">
            Made with ❤️ by <a href="https://github.com/mounishvatti" className="text-green-300">Mounish Vatti</a>
          </p>
        </div>
    </>
  );
}

export default App;
