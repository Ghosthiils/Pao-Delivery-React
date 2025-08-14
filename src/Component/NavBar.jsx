import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    
    <div className="navbar">
    <div className="nav-esquerda">
      <a href="/">Home</a>
      <a href="contato.html">Contato</a>
      <a href="sobre.html">Sobre</a>
      <a href="login.html">Login</a>
      <a href="registre_se.html">Registre-se</a>
    </div>

    <div className="nav-direita">
      < input type="text" placeholder="Buscar pão..."/>
      <a href="carrinho.html">🛒 Carrinho</a>

    </div>
  </div>

  );
}

export default Navbar;
