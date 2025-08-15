import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from '../Component/NavBar';
import Footer from '../Component/Footer';


function Cardapio() {
  return (
    <>
    

      <header className="cabecalho-site">
        <h1>Nosso Cardápio</h1>
        <p>Escolha o seu pão favorito e peça agora!</p>
      </header>

      <div className="galeria-produtos">
        <div className="produto">
          <Link to="/pedido">
            <img src="./paofrancescrocante.jpg" alt="Pão francês" />
          </Link>
          <p>Pão francês crocante<br /><strong>R$ 1,00</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="./paointegralsaudavel.jpeg" alt="Pão integral" />
          </Link>
          <p>Pão integral saudável<br /><strong>R$ 1,50</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="./Croissantamanteigado.jpeg" alt="Croissant" />
          </Link>
          <p>Croissant amanteigado<br /><strong>R$ 3,50</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="./paodeformaartesanal.jpeg" alt="Pão de forma" />
          </Link>
          <p>Pão de forma artesanal<br /><strong>R$ 6,00</strong></p>
        </div>

        <div className="produto">
          <Link to="/pedido">
            <img src="./paodocerecheado.jpeg" alt="Pão doce" />
          </Link>
          <p>Pão doce recheado<br /><strong>R$ 2,50</strong></p>
        </div>
      </div>

      
      <Footer/>
    </>
  );
}

export default Cardapio;
