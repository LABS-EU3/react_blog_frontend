import React from "react";
import ReactHtmlParser from "react-html-parser";

const Table = data => {
  if (!data) return "";

  let content = data.content || [];
  if (!Array.isArray(content) || !content.length) return "";

  return (
    <table className="tc-table">
      <tbody>
        {content.map((row, index) => (
          <tr key={index}>
            {Array.isArray(row) &&
              row.length > 1 &&
              row.map((column, index) => (
                <td key={index} className="tc-table__cell">
                  <div className="tc-table__area">
                    <div className="tc-table__inp">
                      {ReactHtmlParser(column)}
                    </div>
                  </div>
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
