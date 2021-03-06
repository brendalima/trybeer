import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ order, isAdmin, index }) {
  const {
    id,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    sale_date: saleDate,
    status,
  } = order;

  const adminRoute = (isAdmin) ? '/admin' : '';

  const getDate = (date) => {
    const [, month, day] = date.split('-');
    return `${day.substring(0, 2)}/${month}`;
  };

  return (
    <Link
      to={ `${adminRoute}/orders/${id}` }
      data-testid={ `${index}-order-card-container` }
    >
      <div data-testid={ `${index}-order-number` }>{ `Pedido ${id}` }</div>
      <div
        hidden={ !isAdmin }
        data-testid={ `${index}-order-address` }
      >
        { `${deliveryAddress}, ${deliveryNumber}` }
      </div>
      <div
        hidden={ isAdmin }
        data-testid={ `${index}-order-date` }
      >
        { getDate(saleDate) }
      </div>
      <div
        data-testid={ `${index}-order-total-value` }
      >
        { `R$ ${totalPrice.replace('.', ',')}` }
      </div>
      <div hidden={ !isAdmin } data-testid={ `${index}-order-status` }>{ status }</div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    total_price: PropTypes.string.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  isAdmin: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCard;
