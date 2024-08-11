import { useCallback, useState, useEffect } from "react";
import "/src/App.css";
import ComponentRange from "./ComponentRange";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function DisplayLumpsum() {
  const [lumpsumamount, setlumpsumamount] = useState(25000);
  const [returns, setReturns] = useState(8); // Annual return rate in percentage
  const [duration, setDuration] = useState(10); // Investment duration in years
  const [investedAmount, setInvestedAmount] = useState(0); // Total invested amount
  const [estReturn, setEstReturn] = useState(0); // Estimated return
  const [futureValue, setFutureValue] = useState(0); // Future value of SIP
  const [chartData, setChartData] = useState({
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        data: [investedAmount, estReturn],
        backgroundColor: ["rgb(24,26,41)", "rgb(140, 149, 226)"],
        borderColor: "transparent",
        hoverBackgroundColor: ["rgb(24,26,41)", "rgb(140, 149, 226)"], // Optional: colors on hover
        hoverOffset: 4,
      },
    ],
  });

  const calculateFutureValue = useCallback(() => {    // Future value of SIP formula
    const fv =
      lumpsumamount * Math.pow(1 + returns/100, duration);

    setFutureValue(Math.round(fv));
  }, [lumpsumamount, returns, duration]);

  const calculateInvestedAmount = useCallback(() => {
    setInvestedAmount(Math.round(lumpsumamount));
  }, [lumpsumamount]);

  const calculateEstimatedReturn = useCallback(() => {
    setEstReturn(Math.round(futureValue - investedAmount));
  }, [futureValue, investedAmount]);

  useEffect(() => {
    calculateFutureValue();
    calculateInvestedAmount();
    calculateEstimatedReturn();
  }, [
    lumpsumamount,
    returns,
    duration,
    calculateFutureValue,
    calculateInvestedAmount,
    calculateEstimatedReturn,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData({
        labels: ["Invested Amount", "Estimated Returns"],
        datasets: [
          {
            data: [investedAmount, estReturn],
            backgroundColor: ["rgb(24,26,41)", "rgb(140, 149, 226)"],
            borderColor: "transparent",
            hoverBackgroundColor: ["rgb(24,26,41)", "rgb(140, 149, 226)"], // Optional: colors on hover
            hoverOffset: 4,
          },
        ],
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [
    investedAmount,
    estReturn,
    futureValue,
    duration,
    returns,
    lumpsumamount,
    calculateFutureValue,
    calculateInvestedAmount,
    calculateEstimatedReturn,
  ]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          padding: 20,
        },
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

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mt-2 font-sans">
        <div className="border-white/20 border p-4 md:p-8 rounded-lg w-full md:w-1/2">
          <ComponentRange
            labeltext="Lumpsum Amount"
            units="INR"
            param1={lumpsumamount}
            setParam1={setlumpsumamount}
            minval={100000}
            maxval={100000000}
            stepcount={500}
          />
          <ComponentRange
            labeltext="Expected return rate (p.a)"
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
        <div style={{ width: "350px", height: "350px" }}>
          <Doughnut data={chartData} options={options} />
        </div>
      </div>

      <div className="flex flex-row md:flex-row justify-between p-20 md:p-9 w-full md:w-1/2 mx-auto mt-10">
        <div className="mb-4 md:mb-0">
          <h1 className="text-white/50 p-3">
            Invested Amount{" "}
            <span className="text-white/80 font-semibold">
              ₹{formatNumber(investedAmount)}
            </span>
          </h1>
        </div>
        <div className="mb-4 md:mb-0">
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
    </>
  );
}

export default DisplayLumpsum;