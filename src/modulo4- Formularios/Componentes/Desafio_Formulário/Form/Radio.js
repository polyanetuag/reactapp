import React from "react";

export const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if(active === false) return null;
  return (
    <fieldset
      style={{
        border: "2px solid #eee",
        marginBottom: "1rem",
        padding: "2rem",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input type="radio" id={id} name={id} value={option} checked={value === option} onChange={onChange} />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
