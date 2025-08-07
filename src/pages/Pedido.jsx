import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Pedido() {
  // Esta função lida com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita recarregar a página
    alert('Pedido enviado com sucesso!');
    // Aqui você pode adicionar lógica de envio, API, etc.
  };

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

        <div className="nav-direita">
          <input type="text" placeholder="Buscar pão..." />
          <a href="carrinho.jsx">🛒 Carrinho</a>
        </div>
      </div>

      <header className="cabecalho-site">
        <h1>Faça seu pedido</h1>
        <p>Preencha os dados abaixo para receber seu pão quentinho!</p>
      </header>

      <div className="formulario-pedido">
        <form id="formPedido" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required />

          <label htmlFor="quantidade">Quantidade de pães:</label>
          <input type="number" id="quantidade" name="quantidade" min="1" required />

          <button type="submit">Enviar Pedido</button>
        </form>
      </div>

      <footer className="rodape">
        <p>&copy; 2025 Pão Delivery. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Pedido;
