import { StarOutlined } from '@material-ui/icons';
import React from 'react'
import { useStateValue } from '../../Providers/StateProvider';

function ProductDetails({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log('PROPSSSS', basket)
    return (
        <div className="productDetails">
            <div className="productDetails__image">

            </div>
            <div className="productDetails__info">

                <p>{title}</p>


                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarOutlined /></p>
                    ))}

                </div>
                <button >Add to Basket</button>
            </div>

        </div>
    )
}

export default ProductDetails
