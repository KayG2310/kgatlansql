import React from "react";

function ResultsTable({ result }) {
  if (!result || result.length === 0) return <div>No results found</div>;

  return (
    <table>
      <thead>
        <tr>{result[0].map((col, index) => <th key={index}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {result.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => <td key={colIndex}>{col}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
