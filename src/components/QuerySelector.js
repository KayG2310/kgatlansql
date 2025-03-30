import React from "react";

function QuerySelector({ setQuery }) {
  const predefinedQueries = [
    "SELECT * FROM users;",
    "SELECT * FROM orders;",
    "SELECT COUNT(*) FROM users;",
  ];

  return (
    <select onChange={(e) => setQuery(e.target.value)}>
      <option value="">Select a query</option>
      {predefinedQueries.map((q, index) => (
        <option key={index} value={q}>{q}</option>
      ))}
    </select>
  );
}

export default QuerySelector;
