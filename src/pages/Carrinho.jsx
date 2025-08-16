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
        <CardPreco nome="Pão francês crocante" unidade=" (1 unidade)" preco="R$ 1,50" />
        <CardPreco nome="Rosquinhas" unidade=" (1 pacote)" preco="R$ 10,00" />
        <CardPreco nome="pao caseiro" unidade=" 2 unidades" preco="R$ 20,00" />
       


        <hr />

        <div className="total-carrinho">
          <p><strong>Total:</strong></p>
          <p><strong>R$ 8,50</strong></p>
        </div>

        <div className="botoes-carrinho">
          
          <Link to="/">
            <button>Voltar ao cardápio</button>
          </Link>

    

          <button onClick={finalizarCompra}>Finalizar Pedido</button>
        </div>
      </main>

     
    </>
  );
}

export default Carrinho;
