import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Pedido() {
  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert('Pedido enviado com sucesso!');
    // Aqui pode entrar a lógica de envio para a API
  };

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

        <div className="nav-direita">
          <input type="text" placeholder="Buscar pão..." />
          <Link to="/carrinho">🛒 Carrinho</Link>
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
