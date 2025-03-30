import React, { useState } from "react";

function BeginnerQueryBuilder() {
  const [selectColumn, setSelectColumn] = useState("");
  const [fromTable, setFromTable] = useState("");

  return (
    <div className="query-builder-container">
      <h2>Beginner SQL Query Builder</h2>

      <label>Select Columns:</label>
      <input
        type="text"
        placeholder="e.g. name, age"
        value={selectColumn}
        onChange={(e) => setSelectColumn(e.target.value)}
      />

      <label>From Table:</label>
      <input
        type="text"
        placeholder="e.g. users"
        value={fromTable}
        onChange={(e) => setFromTable(e.target.value)}
      />

      <p>Generated Query:</p>
      <code>SELECT {selectColumn || "*"} FROM {fromTable || "your_table"};</code>
    </div>
  );
}

export default BeginnerQueryBuilder;
