import React from 'react';
import '../Checkout/Checkout.css';

function CheckOutProduct({ id, image, title, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>UGX</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {rating}
                </p>
            </div>
        </div>
    )
}

export default CheckOutProduct
