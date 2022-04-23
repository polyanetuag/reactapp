import React from "react";

const App = () => {
  const [select, setSelect] = React.useState("");

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)} id="produtos">
        <option disabled value="">Selecione</option>
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
        <option value="3">Opção 3</option>
      </select>
    </form>
  );
};

export default App;
