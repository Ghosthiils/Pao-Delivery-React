import React from 'react';
import { Link } from 'react-router-dom'; // Se usar React Router
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistreSe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar dados ou validar senha
    alert('Cadastro enviado!');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-esquerda">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Login</Link>
          <Link to="/registre_se">Registre-se</Link>
        </div>
      </nav>

      <div className="login-container">
        <h1>Pão Delivery</h1>
        <h2>Crie sua conta</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome completo:</label>
          <input type="text" id="nome" placeholder="Digite seu nome" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" required />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Crie uma senha" required />

          <label htmlFor="confirmar-senha">Confirmar senha:</label>
          <input type="password" id="confirmar-senha" placeholder="Repita a senha" required />

          <button type="submit">Cadastrar</button>

          <p className="registro">
            Já tem uma conta? <Link to="/Login">Fazer Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegistreSe;
