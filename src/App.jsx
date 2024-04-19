import React, { useState } from "react";
import "./App.css";
import ZakatCalculator from "../src/components/zakatCalculator";
import ZakatDetails from "../src/components/zakatDetails";

const App = () => {
  const [showZakatDetails, setShowZakatDetails] = useState(false);

  const handleZakatDetailsClick = () => {
    setShowZakatDetails(!showZakatDetails);
  };

  return (
    <div>
      <h1>Zakat Calculator</h1>
      <div className="py-5">
        <button onClick={handleZakatDetailsClick} className="button-style">
          {showZakatDetails ? "Zakat Calculator" : "Zakat Nisaab Details"}
        </button>
      </div>

      {showZakatDetails ? <ZakatDetails /> : <ZakatCalculator />}
    </div>
  );
};

export default App;
