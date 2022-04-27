import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.createElement()",
      "React.createClass()",
      "React.creatComponent()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      "import React from 'react'",
      'import Component from "./Component"',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual o nome do componente que representa um formulário?",
    options: ["Form", "Input", "Select"],
    resposta: "Form",
    id: "p3",
  },
  {
    pergunta: "Qual o nome do componente que representa um botão?",
    options: ["Button", "Input", "Select"],
    resposta: "Button",
    id: "p4",
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  //slide para aparecer somente uma pergunta por vez
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  //mudança de estado
  function handleChange({ target }) {
    setRespostas({
      ...respostas,
      [target.id]: target.value,
    });
  }
  //verifica os resultados obtidos
  function resultadoLista() {
      const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta);
      setResultado(`Voc6e acertou: ${corretas.length} de ${perguntas.length} `)
  }

  //verifica o click no botão
  function handleClick() {
      if(slide < perguntas.length -1) {
        setSlide(slide + 1)
      } else {
          setSlide(slide + 1)
        resultadoLista()
      }
  }

  return (
    <form onSubmit={(event)=> event.preventDefault}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
        {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Próxima</button>}
      
    </form>
  );
};

export default App;
