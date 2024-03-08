import React from "react";

export default function Select({
  selectedValue = "",
  options,
  className,
  onChange,
}) {
  return (
    <>
      <select
        value={selectedValue}
        className={className}
        onChange={({ target: { value } }) => {
          onChange?.(value);
        }}
      >
        {options.map((option) => (
          <option value={option?.value} key={option?.value}>
            {option?.name}
          </option>
        ))}
      </select>
    </>
  );
}
