import React from "react";
import CodeLine from "./CodeLine/CodeLine.jsx";
function Table({ data }) {

  return (
    <table className="table">
      <thead>
        {data.map((row, i) => {
          if (i === 0) {
            return (
              <tr key={`heading-row-${i}`}>
                {row.map((cell, j) => (
                  <th key={`heading-cell-${j}`}>{cell}</th>
                ))}
              </tr>
            );
          }
        })}
      </thead>
      <tbody>
        {data.map((row, i) => {
          if (i > 0) {
            return (
              <tr key={`body-row-${i}`}>
                {row.map((cell, j) => {
                  if (j === 2)
                    return <td key={`body-cell-${j}`} dangerouslySetInnerHTML={{ __html: cell }}></td>;
                  return <td key={`body-cell-${j}`}>{cell}</td>;
                })}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
