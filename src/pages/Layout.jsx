import React from 'react';
import { Outlet, Link } from 'react-router-dom';


function Layout() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="nav-esquerda">
            <Link to="/">Cardápio</Link>
            <Link to="/carrinho">Carrinho</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/login">Login</Link>
            <Link to="/pedido">Pedido</Link>
            <Link to="/registre_se">Registre-se</Link>
            <Link to="/sobre">Sobre</Link>
          </div>
          <div className="nav-direita">
            <input type="text" placeholder="Buscar..." />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="rodape">
        <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Layout;
