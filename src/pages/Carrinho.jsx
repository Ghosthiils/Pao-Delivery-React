import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import CardPreco from '../Component/CardPreco';




function Carrinho() {
  const navigate = useNavigate();

  function finalizarCompra() {
    alert("Pedido finalizado com sucesso!");
  }

  return (
    <>
      <header className="cabecalho-site">
        <h1>Seu Carrinho 🛒</h1>
        <p>Revise seu pedido antes de finalizar.</p>
      </header>



      <main className="conteudo-carrinho">
        <CardPreco nome="Pão francês crocante" unidade=" (1 unidade)" preco="R$ 1,50" preco2="R$ 2,50" />
        
       


      </main>

     
    </>
  );
}

export default Carrinho;
