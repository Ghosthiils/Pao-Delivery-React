import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Cardapio() {
  return (
    <>
      <div className="navbar">
        <div className="nav-esquerda">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Login</Link>
          <Link to="/registre-se">Registre-se</Link>
        </div>

        <div className="nav-direita">
          <input type="text" placeholder="Buscar pão..." />
          <Link to="/carrinho">🛒 Carrinho</Link>
        </div>
      </div>

      <header className="cabecalho-site">
        <h1>Nosso Cardápio</h1>
        <p>Escolha o seu pão favorito e peça agora!</p>
      </header>

      <div className="galeria-produtos">
        <div className="produto">
          <Link to="/pedido">
            <img src="/assets/paofrancescrocante.jpg" alt="Pão francês" />
          </Link>
          <p>Pão francês crocante<br /><strong>R$ 1,00</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="/assets/paointegralsaudavel.jpg" alt="Pão integral" />
          </Link>
          <p>Pão integral saudável<br /><strong>R$ 1,50</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="/assets/Croissantamanteigado.jpeg" alt="Croissant" />
          </Link>
          <p>Croissant amanteigado<br /><strong>R$ 3,50</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="/assets/paodeformaartesanal.jpeg" alt="Pão de forma" />
          </Link>
          <p>Pão de forma artesanal<br /><strong>R$ 6,00</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="/assets/paodocerecheado.jpeg" alt="Pão doce" />
          </Link>
          <p>Pão doce recheado<br /><strong>R$ 2,50</strong></p>
        </div>
      </div>

      <footer className="rodape">
        <p>&copy; 2025 Pão Delivery. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Cardapio;
