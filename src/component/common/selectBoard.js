import React from "react";

export default function SelectBoard({boardNames=['']}) {
  return (
    <div className="custom-select">
      <select name="boards">
        {boardNames.map((boardName)=>(<option value={boardName}>{boardName}</option>))}
      </select>
    </div>
  );
}
