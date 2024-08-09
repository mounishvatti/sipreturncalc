import { useCallback, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ComponentRange from "./components/ComponentRange";
import { Doughnut } from 'react-chartjs-2';

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
  }

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
      <div className="flex flex-row items-center justify-between p-9">
        <div className="border-white/20 border p-8 rounded-lg w-1/2">
          <ComponentRange
            labeltext="Monthly Investment"
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
            labeltext="Time Period"
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
    </>
  );
}

export default App;
