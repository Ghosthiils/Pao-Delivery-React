import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Login() {
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
    <h2>Entrar na sua conta:</h2>

    <form className="login-form">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Digite seu email" required/>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" placeholder="Digite sua senha" required/>

      <button type="submit">Entrar</button>

      <p className="registro">Não tem uma conta? <a href="registre-se.jsx">Registre-se</a></p>
    </form>
  </div>
  </>
     );
       
 }   

export default Login