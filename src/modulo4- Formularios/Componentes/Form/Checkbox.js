import React from "react";

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    //verifica se o valor está checado
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      //se não estiver checado, remove o valor
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
