import './App.css'
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Pedido from './pages/Pedido';
import Registre_se from './pages/Registre_se';
import Sobre from './pages/Sobre';
import Layout from './pages/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <>
      <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Layout />} /> 
          <Route index element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/registre_se" element={<Registre_se />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

       
      </BrowserRouter>
    </>
  );
}

export default App;
