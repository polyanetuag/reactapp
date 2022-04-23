import React from "react";

const coresArray = ["azul", "vermelho", "verde", "amarelo", "preto"];

const App = () => {
  const [cores, setCores] = React.useState(["azul", "vermelho"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]); //verifica se o valor já existe no array, se não existir, adiciona
    } else {
      setCores(cores.filter((cor) => cor !== target.value)); //removendo o valor do array
    }
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: "capitalize" }}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;
