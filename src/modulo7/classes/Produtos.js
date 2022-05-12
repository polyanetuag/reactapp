import React from "react";

class Produtos extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      contar: 0,
      loading: true
    };
    

    this.handleClick = this.handleClick.bind(this);
  }
    

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos;
