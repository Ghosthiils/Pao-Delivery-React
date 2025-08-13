import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="navbar">
        <div className="nav-esquerda">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Login</Link>
          <Link to="/registre_se">Registre-se</Link>
        </div>
      </div>

      <div className="login-container">
        <h1>Pão Delivery</h1>
        <h2>Entrar na sua conta:</h2>

        <form className="login-form">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Digite seu email" 
            required
          />

          <label htmlFor="senha">Senha:</label>
          <input 
            type="password" 
            id="senha" 
            placeholder="Digite sua senha" 
            required
          />

          <button type="submit">Entrar</button>

          <p className="registro">
            Não tem uma conta? <Link to="/registre-se">Registre-se</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
