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

      
    </>
  );
}

export default Pedido;
