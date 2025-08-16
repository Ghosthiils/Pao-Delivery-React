import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from '../Component/NavBar';
import Footer from '../Component/Footer';
import CardProduto from '../Component/CardProduto'; 


function Cardapio() {
  return (
    <>
    

      <header className="cabecalho-site">
        <h1>Nosso Cardápio</h1>
        <p>Escolha o seu pão favorito e peça agora!</p>
      </header>

      <div className="galeria-produtos">
        <CardProduto imagem="./paofrancescrocante.jpg" titulo="Pão francês crocante" preco="1,50" />
        <CardProduto imagem="./rosquinhas.webp" titulo="Rosquinhas" preco="10,00" />
        <CardProduto imagem="./paodocerecheado.jpeg" titulo="Pão Recheado" preco="8,00" />
        <CardProduto imagem="./paointegralsaudavel.jpeg" titulo="Pão integral" preco="4,00" />
        <CardProduto imagem="./paofrancescrocante.jpg" titulo="Baguete" preco="12,00" />


      </div>

      
      <Footer/>
    </>
  );
}

export default Cardapio;
