import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ZakatCalculator = () => {
  const [nisabValue, setNisabValue] = useState(0);
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [land, setLand] = useState("");
  const [cash, setCash] = useState("");
  const [zakatPayable, setZakatPayable] = useState(0);
  const [totalWealth, setTotalWealth] = useState(0);

  const updateNisabValue = (value) => {
    setNisabValue(value);
  };

  const calculateZakat = () => {
    const numericGold = parseFloat(gold) || 0;
    const numericSilver = parseFloat(silver) || 0;
    const numericLand = parseFloat(land) || 0;
    const numericCash = parseFloat(cash) || 0;

    const totalWealth = numericGold + numericSilver + numericLand + numericCash;

    if (totalWealth >= nisabValue) {
      setZakatPayable((totalWealth * 0.025).toFixed(2));
    } else {
      setZakatPayable(0);
      toast.error("Not eligible for Zakat");
    }

    // Update totalWealth state
    setTotalWealth(totalWealth);
  };

  const clearFields = () => {
    setGold("");
    setSilver("");
    setLand("");
    setCash("");
    setTotalWealth(0);
    setZakatPayable(0);
  };

  const isAnyValueEntered = gold || silver || land || cash; // Check if any field has a value

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="nisab-value" className="label-style">
          Nisab Value (PKR):
        </label>
        <input
          id="nisab-value"
          type="number"
          placeholder="Enter Nisab Value"
          className="w-full p-2 border rounded"
          onChange={(e) => updateNisabValue(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="gold" className="label-style">
          Gold (grams):
        </label>
        <input
          id="gold"
          value={gold}
          type="number"
          placeholder="Enter Gold Amount"
          className="w-full p-2 border rounded"
          onChange={(e) => setGold(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="silver" className="label-style">
          Silver (grams):
        </label>
        <input
          id="silver"
          value={silver}
          type="number"
          placeholder="Enter Silver Amount"
          className="w-full p-2 border rounded"
          onChange={(e) => setSilver(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="land" className="label-style">
          Land (amount):
        </label>
        <input
          id="land"
          type="number"
          value={land}
          placeholder="Enter Land Amount"
          className="w-full p-2 border rounded"
          onChange={(e) => setLand(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="cash" className="label-style">
          Cash (PKR):
        </label>
        <input
          id="cash"
          type="number"
          value={cash}
          placeholder="Enter Cash Amount"
          className="w-full p-2 border rounded"
          onChange={(e) => setCash(e.target.value)}
          min="0"
        />
      </div>
      <div className="mt-10 space-x-4">
        <button
          className={`button-style ${
            !isAnyValueEntered
              ? "bg-gray-300 cursor-not-allowed opacity-70"
              : ""
          }`}
          onClick={calculateZakat}
          disabled={!isAnyValueEntered}>
          Calculate Zakat
        </button>

        <button
          className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-600"
          onClick={clearFields}>
          Clear Fields
        </button>
      </div>
      <div className="text-black mt-10 font-bold">
        Total Wealth: <span className="amount">PKR {totalWealth}</span>
      </div>
      <div className="text-black mt-10 font-bold">
        Zakat Payable: <span className="amount">PKR {zakatPayable}</span>
      </div>
    </div>
  );
};

export default ZakatCalculator;
