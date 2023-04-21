import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import PagoShopContext from '../../context/PagoShopContext';
import formatNumberToPrice from '../../helpers/formatNumber';
import './styles/ProductCard.css';

const NO_IMG_URL = 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg';

function ProductCard({ products }) {
  const { setShowPreviewCartModal, cart, setCart } = useContext(PagoShopContext);

  const increaseProductQuantityInCart = (productInCart) => {
    const productIndex = cart.findIndex((prod) => prod.name === productInCart.name);
    const newCart = cart;
    newCart[productIndex].quantity += 1;

    setCart([...newCart]);
  };

  const addProductToCart = (productToAdd) => {
    const newProduct = {
      id: productToAdd._id,
      name: productToAdd.product,
      thumbnail: productToAdd.thumbnail,
      price: productToAdd.unitPrice,
      quantity: 1,
    };

    setCart([...cart, newProduct]);
  };

  const handleAddToCartClick = (product) => {
    const productInCart = cart.find((prod) => prod.id === product._id);
    if (productInCart) increaseProductQuantityInCart(productInCart);
    if (!productInCart) addProductToCart(product);

    setShowPreviewCartModal(true);
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
          <span>{`${formatNumberToPrice.format(unitPrice)}`}</span>
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
