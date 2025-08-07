import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Registre_se() {
    return (
        <>
        <div className="navbar">
    <div className="nav-esquerda">
      <a href="index.jsx">Home</a>
      <a href="contato.jsx">Contato</a>
      <a href="sobre.jsx">Sobre</a>
      <a href="login.jsx">Login</a>
      <a href="registre-se.jsx">Registre-se</a>
    </div>
  </div>

  <div className="login-container">
    <h1>Pão Delivery</h1>
    <h2>Crie sua conta</h2>

    <form className="login-form">
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" placeholder="Digite seu nome" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Digite seu email" required/>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" placeholder="Crie uma senha" required/>

      <label for="confirmar-senha">Confirmar senha:</label>
      <input type="password" id="confirmar-senha" placeholder="Repita a senha" required/>

      <button type="submit">Cadastrar</button>

      <p className="registro">Já tem uma conta? <a href="login.jsx">Fazer login</a></p>
    </form>
  </div>
        </>
    )
}

export default Registre_se