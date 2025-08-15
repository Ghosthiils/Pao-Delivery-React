import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';


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
        <div className="item-carrinho">
          <p><strong>Pão francês</strong> - 6 unidades</p>
          <p>R$ 3,00</p>
        </div>

        <div className="item-carrinho">
          <p><strong>Rosquinhas</strong> - 1 pacote</p>
          <p>R$ 5,50</p>
        </div>

        <hr />

        <div className="total-carrinho">
          <p><strong>Total:</strong></p>
          <p><strong>R$ 8,50</strong></p>
        </div>

        <div className="botoes-carrinho">
          {/* Forma 1 - usando Link */}
          <Link to="/">
            <button>Voltar ao cardápio</button>
          </Link>

          {/* Forma 2 - usando navigate */}
          {/* <button onClick={() => navigate('/cardapio')}>Voltar ao cardápio</button> */}

          <button onClick={finalizarCompra}>Finalizar Pedido</button>
        </div>
      </main>

     
    </>
  );
}

export default Carrinho;
