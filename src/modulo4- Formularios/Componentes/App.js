import React from "react";
import Checkbox from "./Form/Checkbox";
import useForm from "./Form/Hooks/useForm";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  // const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  const cep = useForm('cep');

  function handleSubmit(event) {
    event.preventDefault();
    if (true
    ) {
      setError("Preencha todos os campos");
      return;
    }
    setError(null);
  }

  // function validateCep(value) {
  //   if(value.length === 0) {
  //     setError('Preencha o CEP');
  //     return false;
  //   } else if(!/^\d{5}-\d{3}$/.test(value)) {
  //     setError('Preencha um CEP válido');
  //     return false;
  //   } else {
  //     setError(null);
  //     return true;
  //   }
  // }

  // function handleBlur({target}) {
  //   validateCep(target.value);
  // }

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

      <Input
        label='CEP'
        id='cep'
        type='text'
        value={cep}
        // setValue={setCep}
        // onBlur={handleBlur}
        placeholder='000000-000'
        />
        {error && <span style={{color: 'red'}}>{error}</span>}
    </form>
  );
};

export default App;
