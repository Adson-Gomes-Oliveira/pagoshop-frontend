import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import PagoShopContext from '../../context/PagoShopContext';
import formatNumberToPrice from '../../helpers/formatNumber';
import './styles/ProductCard.css';

const NO_IMG_URL = 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg';

function ProductCard({ products }) {
  const { setShowPreviewCartModel } = useContext(PagoShopContext);

  const increaseProductQuantityInCart = (parsedCart, productInCart) => {
    const productIndex = parsedCart.findIndex((prod) => prod.name === productInCart.name);
    const newCart = parsedCart;
    newCart[productIndex].quantity += 1;

    localStorage.setItem('shopping-cart', JSON.stringify(newCart));
  };

  const addProductToCart = (parsedCart, productToAdd) => {
    const newCart = parsedCart;
    const newProduct = {
      id: productToAdd._id,
      name: productToAdd.product,
      thumbnail: productToAdd.thumbnail,
      price: productToAdd.unitPrice,
      quantity: 1,
    };

    newCart.push(newProduct);

    localStorage.setItem('shopping-cart', JSON.stringify(newCart));
  };

  const handleAddToCartClick = (product) => {
    const parsedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    const productInCart = parsedCart.find((prod) => prod.name === product.product);

    if (productInCart) increaseProductQuantityInCart(parsedCart, productInCart);
    if (!productInCart) addProductToCart(parsedCart, product);

    setShowPreviewCartModel(true);
  };

  const cards = products && products.map((product) => {
    const { product: name, unitPrice, thumbnail } = product;

    return (
      <div className="product-card" key={uuid()}>
        <div className="card-thumbnail" style={{ backgroundImage: `url(${thumbnail || NO_IMG_URL})` }}>
          <div><span>Mais vendidos</span></div>
        </div>
        <div className="card-info">
          <span>{name}</span>
          <span>{`R$ ${formatNumberToPrice(unitPrice)}`}</span>
          <button
            type="button"
            onClick={() => handleAddToCartClick(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  });

  return cards;
}

ProductCard.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default ProductCard;
