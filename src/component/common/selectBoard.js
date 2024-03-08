import React from "react";

export default function Select({ options, className }) {
  return (
    <>
      <select className={className}>
        {options.map((option) => (
          <option value={option?.value} key={option?.value}>
            {option?.name}
          </option>
        ))}
      </select>
    </>
  );
}
