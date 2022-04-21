import React from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
    }

    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto perferido:{produto} </p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
