import "./CardProduto.css";
import {Link} from "react-router-dom";


function CardProduto({imagem, titulo, preco}) {
  return (
    <>
      <div className="produto">
        <Link to="/pedido">
          <img src={imagem} alt={titulo} />
        </Link>
        <p>
          {titulo}
          <br />
          <strong>R$ {preco}</strong>
        </p>
      </div>
    </>
  );
}

export default CardProduto;
