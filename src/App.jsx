
import './App.css'
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Footer from './Component/Footer'
import Cardapio from './pages/Cardapio'
import Carrinho from './pages/Carrinho'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Pedido from './pages/Pedido'
import RegistreSe from './pages/Registre_se'
import Sobre from './pages/Sobre'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  

  return (
    <>
     
     <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<Cardapio />} /> 
        <Route path="/cardapio" element={<Cardapio />} /> 
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/registre-se" element={<RegistreSe />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      
    </BrowserRouter>
    </>
  )
}

export default App
