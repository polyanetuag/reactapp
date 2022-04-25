import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "React", "Typescript"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <Select
        options={["smartphone", "tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
