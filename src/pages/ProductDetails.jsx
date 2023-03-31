import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import requester from '../helpers/requester';
import MainHeader from '../components/header/MainHeader';
import formatNumberToPrice from '../helpers/formatNumber';
import PagoShopContext from '../context/PagoShopContext';
import ConfirmBuyModal from '../components/products/ConfirmBuyModal';
import './styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productBuyQuantity, setProductQuantity] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navigate = useNavigate();
  const { cart, setCart } = useContext(PagoShopContext);

  const requestProduct = async () => {
    const response = await requester('products', 'getOne', id);
    setProduct(response);
  };

  useEffect(() => {
    requestProduct();
  }, []);

  const handleChangeQuantity = (event) => {
    const { value } = event.target;
    setProductQuantity(value);
  };

  const cartWithItems = (cartCopy) => {
    const productExistsInCartIndex = cartCopy
      .findIndex((productInCart) => productInCart.product === product.product);

    if (productExistsInCartIndex > -1) {
      const newCart = [...cartCopy];
      newCart[productExistsInCartIndex].quantity += Number(productBuyQuantity);
      setCart(newCart);
      return;
    }

    const cartUpdated = [
      ...cartCopy,
      {
        id: product._id,
        product: product.product,
        unitPrice: product.unit_price,
        thumbnail: product.thumbnail,
        quantity: Number(productBuyQuantity),
      },
    ];

    setCart(cartUpdated);
  };
  const cartWithNoItems = () => {
    const newCart = [
      {
        id: product._id,
        product: product.product,
        unitPrice: product.unit_price,
        thumbnail: product.thumbnail,
        quantity: Number(productBuyQuantity),
      },
    ];

    return setCart(newCart);
  };

  const handleClickBuy = () => {
    if (!localStorage.getItem('user')) return navigate('/login');

    setShowConfirmModal(true);
    if (cart.length > 0) return cartWithItems(cart);

    return cartWithNoItems();
  };

  return (
    <>
      <MainHeader />
      <section className="product-details-section">
        {showConfirmModal && <ConfirmBuyModal toggleOff={setShowConfirmModal} />}
        {product !== null ? (
          <>
            <div className="product-image">
              <h2>{product.product}</h2>
              <img src={product.thumbnail} alt={product.name} />
              <span>{product.slug}</span>
            </div>
            <div className="product-buy">
              <span>{`R$ ${formatNumberToPrice(product.unit_price)}`}</span>
              <span>Pode dividir em até 12X sem juros !</span>
              <span>Aceitamos todos os cartões.</span>
              <span>Frete grátis todo Brasil *</span>
              <div className="select-quantity">
                <span>Quantidade: </span>
                <input
                  type="number"
                  onChange={handleChangeQuantity}
                  value={productBuyQuantity}
                />
              </div>
              <span>{`Quantidade em Estoque: ${product.quantity}`}</span>
              <button
                type="button"
                onClick={handleClickBuy}
              >
                Comprar
              </button>
            </div>
          </>
        ) : <span>ERRO404</span>}
      </section>
      {product !== null ? (
        <div className="product-details-description">
          <h3>DESCRIÇÃO DO PRODUTO</h3>
          <p>{product.description}</p>
        </div>
      ) : <span>ERRO404</span>}
    </>
  );
}

export default ProductDetails;
