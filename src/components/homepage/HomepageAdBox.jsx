import React from 'react';
import '../styles/HomepageAdBox.css';

function HomepageAdBox() {
  return (
    <section className="homepage-ad-box">
      <h2>Assine nossa BOX surpresa e receba todos os meses produtos de alta qualidade.</h2>
      <div className="divisor" />
      <span>
        {`Além dos produtos muito legais que você vai receber todo o mês, membros
        da BOX recebem 4 cupons mensais gratuitos para participar dos sorteios.`}
      </span>
      <button type="button">Inscreva-se</button>
    </section>
  );
}

export default HomepageAdBox;
