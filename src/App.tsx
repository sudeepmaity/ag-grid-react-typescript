import React, { useState } from "react";
import "./App.css";
import AgGridTable from "./AgGridTable";

const App: React.FC = () => {
  const [port, setPort] = useState<number | null>(null);
  const [inputPort, setInputPort] = useState<string>("");

  const handleButtonClick = () => {
    const parsedPort = parseInt(inputPort, 10);
    if (!isNaN(parsedPort)) {
      setPort(parsedPort);
    } else {
      alert("Please enter a valid port number");
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React-App</h1>
      <h3>Student Details</h3>
      <div>
        <input
          type="text"
          value={inputPort}
          onChange={(e) => setInputPort(e.target.value)}
          placeholder="Enter port number"
        />
        <button onClick={handleButtonClick}>Fetch Data</button>
      </div>
      {port && <AgGridTable port={port} />}
    </div>
  );
};

export default App;
