import "./CardPreco.css";

function CardPreco({ nome, unidade, preco }) {

  return (
    <>
      <div className="item-carrinho">
        <p>
          <strong>{nome}</strong>
          {unidade}
        </p>
        <p>{preco}</p>
      </div>
    </>
  );
}

export default CardPreco;
