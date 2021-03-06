import { StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../../Providers/StateProvider';
import '../Checkout/Checkout.css';
import FlipMove from 'react-flip-move';

function CheckOutProduct({ id, image, title, price, rating, hideButton }) {

    const [{ basket }, dispatch] = useStateValue();

    //remove item from basket


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }

    return (

        <div className="checkoutProduct">
            <img className="checkoutProduct__image" alt="" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarBorderOutlined /></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove</button>
                )}

            </div>
        </div>


    )
}

export default CheckOutProduct
