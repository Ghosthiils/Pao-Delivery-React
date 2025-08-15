import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Pedido from './pages/Pedido';
import Registre_se from './pages/Registre_se';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout envolve todas as páginas */}
        <Route path="/" element={<Layout />}>
          {/* Página inicial */}
          <Route index element={<Cardapio />} />
          {/* Outras páginas */}
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
          <Route path="pedido" element={<Pedido />} />
          <Route path="registre_se" element={<Registre_se />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
