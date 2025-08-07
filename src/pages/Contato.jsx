import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Contato() {
    return (
        <>
            <div id="container">
                <div className="navvbar">
                    <div className="navvesquerda">
                        <a href="index.jsx">Home</a>
                        <a href="contato.jsx">Contato</a>
                    </div>
                </div>

                <section className="contato">
                    <h1>Entre em contato com a gente !!!</h1>
                    <br />

                    <h2><strong>Telefone:</strong> (11) 91234-5678</h2>
                    <br />
                    <h2><strong>Email:</strong> paodelivery@exemplo.com</h2>
                    <br />
                    <h2><strong>Endereço:</strong> Av. Padre Oswaldo Vieira de Andrade, 1185, SP</h2>
                    <br /><br /><br /><br />
                    <h2>Quer fechar uma parceria conosco ?!</h2>
                    <br />
                    <h2>Por favor entre em contato através deste email: ParceriaPaoDelivery@hotmail.com</h2>

                    <br />
                    <br />
                    <div className="botao-whatsapp">
                        <a href="https://wa.me/5511912345678" target="_blank" rel="noreferrer">
                            Fale conosco no WhatsApp
                        </a>
                    </div>
                </section>
            </div>

            <footer className="rodape">
                <p>&copy; 2025 Pão Delivery. Todos os direitos reservados.</p>
                <p>Feito com ❤️ por Luiz</p>
            </footer>
        </>
    );
}

export default Contato;
