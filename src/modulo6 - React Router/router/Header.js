import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; // possui o mesmo comportamento do Link do react-router-dom só que mostra o elemento ativo

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={{color: 'tomato'}} end>
        Home
      </NavLink>{" "}
      | <NavLink to="/about" activeStyle={{color: 'tomato'}}>About</NavLink>{" "}
      | <NavLink to="/login" activeStyle={{color: 'tomato'}}>Login</NavLink>
    </nav>
  );
};

export default Header;
