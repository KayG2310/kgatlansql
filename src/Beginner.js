import React, { useState } from "react";
import "./Beginner.css";

const Beginner = () => {
  const [selectColumns, setSelectColumns] = useState("");
  const [fromTable, setFromTable] = useState("");
  const [whereCondition, setWhereCondition] = useState("");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (!selectColumns || !fromTable) {
      alert("SELECT and FROM fields are required!");
      return;
    }

    let generatedQuery = `SELECT ${selectColumns} FROM ${fromTable}`;
    if (whereCondition) {
      generatedQuery += ` WHERE ${whereCondition}`;
    }

    setQuery(generatedQuery);


    const fakeData = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
    ];
    setResult(fakeData);
  };

  return (
    <div className="beginner-container">
      <div className="placard">
        <h2>SELECT</h2>
        <input
          type="text"
          placeholder="Enter columns (e.g., name, age), * for all"
          value={selectColumns}
          onChange={(e) => setSelectColumns(e.target.value)}
        />
      </div>

      <div className="placard">
        <h2>FROM</h2>
        <input
          type="text"
          placeholder="Enter table name"
          value={fromTable}
          onChange={(e) => setFromTable(e.target.value)}
        />
      </div>

      <div className="placard">
        <h2>WHERE (optional)</h2>
        <input
          type="text"
          placeholder="Enter condition (e.g., age > 20)"
          value={whereCondition}
          onChange={(e) => setWhereCondition(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit Query
      </button>

      {query && <div className="query-preview">Query: {query}</div>}

      {result && (
        <div className="result-table">
          <table>
            <thead>
              <tr>
                {Object.keys(result[0]).map((key) => (
                  <th key={key}>{key.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Beginner;
