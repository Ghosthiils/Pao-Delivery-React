import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {
  return (
    <>
      <div className="navbar">
        <div className="nav-esquerda">
          <a href="index.jsx">Home</a>
          <a href="contato.jsx">Contato</a>
          <a href="sobre.jsx">Sobre</a>
          <a href="login.jsx">Login</a>
          <a href="registre_se.jsx">Registre-se</a>
        </div>
      </div>

      <div className="cabecalho-site">
        <h1>Sobre a Pão Delivery</h1>
        <p>Conheça nossa história</p>
      </div>

      <div className="area-sobre">
        <p>
          A Pão Delivery surgiu em uma pequena cozinha de fundo de quintal, em uma manhã fria e chuvosa de domingo. 
          João, um apaixonado por pães quentinhos e cheirosos, sempre sonhou em levar o sabor de um pão fresco para todos,
          sem que ninguém precisasse sair de casa. Foi aí que nasceu a ideia: e se fosse possível entregar pães artesanais, 
          feitos na hora, direto na porta das pessoas?
        </p>

        <p>
          No início, as entregas eram feitas de bicicleta, com a ajuda de sua esposa e alguns amigos. O cheirinho do pão quente 
          logo se espalhou pela vizinhança, e o que era um pequeno experimento virou uma paixão que cresceu junto com a cidade. 
          Investimos em qualidade, ingredientes naturais, fermentação lenta e, principalmente, amor em cada fornada.
        </p>

        <p>
          Hoje, a Pão Delivery atende diversos bairros com um sistema moderno de pedidos online, mantendo a tradição do pão caseiro.
          Acreditamos que comida boa tem o poder de transformar o dia de alguém. Nosso propósito é simples: levar calor, sabor e um 
          sorriso para cada cliente que abre a porta e recebe um pão quentinho.
        </p>

        <p>
          Se você valoriza aquele momento especial do café da manhã ou da tarde, estamos aqui para fazer parte dele. 
          Seja bem-vindo à família Pão Delivery – onde tradição e tecnologia caminham lado a lado, para deixar sua vida mais gostosa!
        </p>
      </div>

      <div className="rodape">
        &copy; 2025 Pão Delivery. Todos os direitos reservados.
      </div>
    </>
  )
}

export default Sobre;
