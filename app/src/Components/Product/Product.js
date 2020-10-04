import React from 'react';
import '../Product/Product.css';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { useStateValue } from '../../Providers/StateProvider';


function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    console.log("BASKET", basket);
    //Add products to basket
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating
            }
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>UGX</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarOutlinedIcon /></p>
                    ))}

                </div>

            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
