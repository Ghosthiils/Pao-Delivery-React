import './App.css'
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Pedido from './pages/Pedido';
import RegistreSe from './pages/Registre_se';
import Sobre from './pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      
      
        

        <Routes>
          <Route path="/" element={<Cardapio />} /> 
          <Route path="/Cardapio" element={<Cardapio />} /> 
          <Route path="/Carrinho" element={<Carrinho />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Pedido" element={<Pedido />} />
          <Route path="/Registre-se" element={<RegistreSe />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>

       
      </BrowserRouter>
    </>
  );
}

export default App;
