import React from "react";

const App = () => {
  const [cores, setCores] = React.useState(['azul', 'vermelho']);

  function handleChange({target}) {
    if (target.checked) {
      setCores([...cores, target.value]); //verifica se o valor já existe no array, se não existir, adiciona
    } else {
      setCores(cores.filter(cor => cor !== target.value)); //removendo o valor do array
    }
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={cores.includes('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
