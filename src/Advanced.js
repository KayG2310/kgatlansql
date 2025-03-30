import React, { useState } from "react";
import "./Advanced.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const executeQuery = () => {
    console.log("Executing query:", query); 
  
    if (!query.trim()) {
      setResults([]);
      return;
    }
  
    let simulatedResults = [];
  
    if (query.toLowerCase().includes("select * from users")) {
      simulatedResults = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
      ];
    } else if (query.toLowerCase().includes("select * from orders")) {
      simulatedResults = [
        { order_id: 101, product: "Laptop", price: 1500 },
        { order_id: 102, product: "Phone", price: 800 },
      ];
    } else {
  
      simulatedResults = [
        { key: "A", value: 123 },
        { key: "B", value: 456 },
        { key: "C", value: 789 },
      ];
    }
  
    console.log("Simulated Results:", simulatedResults);
    setResults(simulatedResults);
  };
  
  
  
  
  return (
    <div className="app-container">
      <div className="container">
        <h1>SQL Query Executor</h1>

        
        <div className="query-section">
        <select
  className="query-selector"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
>
  <option value="">Select a Query</option>
  <option value="SELECT * FROM users">SELECT * FROM users</option>
  <option value="SELECT * FROM orders">SELECT * FROM orders</option>
</select>

<textarea
  className="query-editor"
  value={query}
  onChange={(e) => {
    console.log("Query updated:", e.target.value);
    setQuery(e.target.value);
  }}
  placeholder="Write your SQL query here..."
/>

        </div>

        
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={executeQuery}>
            Execute Query
          </button>
        </div>

        
<div className="results-container">
  {results.length > 0 && results[0] ? (
    <table className="result-table">
      <thead>
        <tr>
          
          {Object.keys(results[0]).map((key) => (
            <th key={key}>{key.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="empty-state">No results found</div>
  )}
</div>

      </div>
    </div>
  );
}

export default App;
