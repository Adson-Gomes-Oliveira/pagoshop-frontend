import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import requester from '../../helpers/requester';
import PagoShopContext from '../../context/PagoShopContext';
import formatNumberToPrice from '../../helpers/formatNumber';
import '../styles/Invoice.css';

function Invoice({ info }) {
  const [orderPayment, setOrderPayment] = useState();
  const navigate = useNavigate();
  const { setCart } = useContext(PagoShopContext);

  const recoverPayment = async () => {
    const recoverToken = localStorage.getItem('token');
    const response = await requester('payments', 'getOne', {
      id: info.paymentId,
      token: recoverToken,
    });

    setOrderPayment(response);
  };

  const downloadInvoice = async () => {
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const data = await html2canvas(document.querySelector('#pdf'));
    const img = data.toDataURL('image/png');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice.pdf');
    navigate('/');
    setCart([]);
  };

  useEffect(() => {
    recoverPayment();
  }, []);

  return (
    <div className="invoice-section">
      <div id="pdf" className="invoice">
        <button
          type="button"
          onClick={downloadInvoice}
          className="download-button"
        >
          <span className="material-icons-outlined">picture_as_pdf</span>
        </button>
        <h2>Nota Fiscal</h2>
        <span className="divisor">------------------------</span>
        <div className="order-buyer">
          <span>
            <b>Nome do comprador: </b>
            {info.name}
          </span>
          <span>
            <b>CPF: </b>
            {info.cpf}
          </span>
        </div>
        {orderPayment && (
        <div className="order-payment">
          <span>
            <b>Número do Cartão: </b>
            {orderPayment.cardNumber}
          </span>
          <span>
            <b>Valor Pago: </b>
            {`R$ ${formatNumberToPrice(orderPayment.value)}`}
          </span>
        </div>
        )}
        <div className="order-delivery">
          <span>
            <b>Rua: </b>
            {info.description.buyerAddress.street}
          </span>
          <span>
            <b>Número: </b>
            {info.description.buyerAddress.number}
          </span>
          <span>
            <b>CEP: </b>
            {info.description.buyerAddress.cep}
          </span>
          <span>
            <b>Complemento: </b>
            {info.description.buyerAddress.moreInfo}
          </span>
          <span>
            <b>Cidade: </b>
            {info.description.buyerAddress.city}
          </span>
          <span>
            <b>Estado: </b>
            {info.description.buyerAddress.state}
          </span>
        </div>
        <div className="order-products">
          {info.description.productsOrdered.map((product) => {
            const { quantity, product: name, price } = product;
            return (
              <li key={uuid()}>{`${quantity} X - ${name} [ ${price * quantity} ]`}</li>
            );
          })}
        </div>
        <span>
          <b>Data de Compra: </b>
          {info.createdAt}
        </span>
      </div>
    </div>
  );
}

Invoice.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default Invoice;
