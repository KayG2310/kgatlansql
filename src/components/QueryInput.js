import React from "react";

function QueryInput({ query, setQuery }) {
  return (
    <textarea
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Enter SQL query..."
    />
  );
}

export default QueryInput;
