import React from 'react';
import TrooperLogo from '../assets/svg/trooper-logo.svg';
import './styles/Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="footer-first-section">
        <div className="footer-logo">
          <img src={TrooperLogo} alt="pago-shop-logo" />
          <h1>Trooper</h1>
        </div>
        <div className="footer-menu-about">
          <span>A empresa</span>
          <ul>
            <li>Sobre</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-contact">
          <span>Contato</span>
          <ul>
            <li>adsongoliveira2022@outlook.com</li>
            <li>Desenvolvedor Full-stack</li>
            <li>https://www.linkedin.com/in/adson-gomes-oliveira/</li>
            <li>https://github.com/Adson-Gomes-Oliveira</li>
            <li>Tel: +55 77 98115-5625</li>
          </ul>
        </div>
      </div>
      <div className="footer-second-section">
        <div className="divisor" />
        <ul className="footer-policy">
          <li>Termos e Condições</li>
          <li>Politica de Privacidade</li>
          <li>Politica de Envio</li>
          <li>Politica de Devolução</li>
          <li>Politica de Cookies</li>
        </ul>
        <div className="divisor" />
        <div className="footer-payments">
          <h3>Métodos de Pagamentos Aceitos</h3>
          <div className="accepted">
            <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo.png" alt="Visa" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" />
            <img src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png" alt="American Express" />
            <img src="https://www.moraisadvogados.com.br/wp-content/uploads/2021/12/boleto-logo-e1640792109781-500x376.png" alt="Boleto" />
            <img src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo.png" alt="PayPal" />
            <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" alt="Mercado Pago" />
            <img src="https://logodownload.org/wp-content/uploads/2016/09/pagseguro-logo-1.png" alt="Pagseguro" />
          </div>
        </div>
        <div className="divisor" />
      </div>
      <div className="footer-third-section">
        <span>© 2023 por Adson Gomes Oliveira.</span>
        <span>Analista de TI Jr na empresa PagoNxt Merchant Solutions Brazil</span>
        <span>Desenvolvedor Full-Stack</span>
        <span>+55 77 98115-5625</span>
        <span>Estimativa de entrega 2 - 5 dias úteis</span>
      </div>
    </section>
  );
}

export default Footer;
