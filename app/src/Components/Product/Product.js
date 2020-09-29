import React from 'react';
import '../Product/Product.css';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';


function Product({ title, image, price, rating }) {
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
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
