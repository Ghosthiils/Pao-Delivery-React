import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Carrinho() {
    return (
        <>
        <header className="cabecalho-site">
    <h1>Seu Carrinho 🛒</h1>
    <p>Revise seu pedido antes de finalizar.</p>
  </header>

 
  <main className="conteudo-carrinho">
    <div className="item-carrinho">
      <p><strong>Pão francês</strong> - 6 unidades</p>
      <p>R$ 3,00</p>
    </div>

    <div className="item-carrinho">
      <p><strong>Rosquinhas</strong> - 1 pacote</p>
      <p>R$ 5,50</p>
    </div>

    <hr/>

    
    <div className="total-carrinho">
      <p><strong>Total:</strong></p>
      <p><strong>R$ 8,50</strong></p>
    </div>

    
    <div className="botoes-carrinho">
      <button onclick="window.location.href='cardapio.jsx'">Voltar ao cardápio</button>
      <button onclick="finalizarCompra()">Finalizar Pedido</button>
    </div>
  </main>

  
  <footer className="rodape">
    <p>&copy; 2025 Pão Delivery. Todos os direitos reservados.</p>
  </footer>

  <script>
    function finalizarCompra() {
      alert("Pedido finalizado com sucesso!")
    }
  </script>

        </>
    )
}
export default Carrinho