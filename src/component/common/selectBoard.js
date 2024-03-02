import React from "react";

export default function SelectBoard({ boardNames = [""], className }) {
  return (
    <>
      <select name="boards" className={className}>
        {boardNames.map((boardName) => (
          <option value={boardName} key={boardName}>
            {boardName}
          </option>
        ))}
      </select>
    </>
  );
}
