import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Cardapio() {
    return (
        <>
         <div className="navbar">
    <div className="nav-esquerda">
      <a href="index.jsx">Home</a>
      <a href="contato.jsx">Contato</a>
      <a href="sobre.jsx">Sobre</a>
      <a href="login.jsx">Login</a>
      <a href="registre-se.jsx">Registre-se</a>
    </div>

    <div className="nav-direita">
      <input type="text" placeholder="Buscar pão..."/>
      <a href="carrinho.jsx">🛒 Carrinho</a>
    </div>
  </div>

  <header className="cabecalho-site">
    <h1>Nosso Cardápio</h1>
    <p>Escolha o seu pão favorito e peça agora!</p>
  </header>


  <div className="galeria-produtos">

    <div className="produto">
        <a href="pedido.jsx">
      <img src="./assets/paofrancêscrocante.jpg" alt="Pão francês"/>
        </a>
      <p>Pão francês crocante<br/><strong>R$ 1,00</strong></p>
    </div>

    <div className="produto">
        <a href="pedido.jsx">
      <img src="./assets/paointegralsaudavel" alt="Pão integral"/>
    </a>
      <p>Pão integral saudável<br/><strong>R$ 1,50</strong></p>
    </div>

    <div className="produto">
        <a href="pedido.jsx">
      <img src="./assets/Croissantamanteigado.jpeg" alt="Croissant"/>
    </a>
      <p>Croissant amanteigado<br/><strong>R$ 3,50</strong></p>
    </div>

    <div className="produto">
        <a href="pedido.jsx">
      <img src="./assets/paodeformaartesanal.jpeg" alt="Pão de forma"/>
    </a>
    
      <p>Pão de forma artesanal<br/><strong>R$ 6,00</strong></p>
    </div>

    <div className="produto">
        <a href="pedido.jsx">
      <img src="./assets/paodocerecheado.jpeg" alt="Pão doce"/>
    </a>
      <p>Pão doce recheado<br/><strong>R$ 2,50</strong></p>
    </div>

  </div>
  
  <footer class="rodape">
    <p>&copy; 2025 Pão Delivery. Todos os direitos reservados.</p>
  </footer>
        
        </>
    )
}

export default Cardapio