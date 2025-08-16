import {Link} from "react-router-dom";
import "./CardPreco.css";


function CardPreco({nome, unidade , preco, preco2}) {
    function finalizarCompra() {
        alert("Compra finalizada!");
    }
    return (
        <>
        
<main className="conteudo-carrinho">
        <div className="item-carrinho">
          <p><strong>{nome}</strong>{unidade}</p>
          <p>{preco}</p>
        </div>

        <div className="item-carrinho">
          <p><strong>{nome}</strong>{unidade}</p>
          <p>{preco2}</p>
        </div>

        <hr />

        <div className="total-carrinho">
          <p><strong>Total:</strong></p>
          <p><strong>R$ 8,50</strong></p>
        </div>

        <div className="botoes-carrinho">
          
          <Link to="/">
            <button>Voltar ao cardápio</button>
          </Link>

          <button onClick= {finalizarCompra} >Finalizar Pedido</button>
        </div>
      </main>




        
        </>
    )
}

export default CardPreco;