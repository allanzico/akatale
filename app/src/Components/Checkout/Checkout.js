import React from 'react';
import '../Checkout/Checkout.css';
import adBanner from '../../images/ad.jpg';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {

    return (
        <div>
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src={adBanner} alt="ad" />
                    <div>
                        <h2 className="checkout__title">
                            Your Basket
                        </h2>
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>

        </div>
    )
}

export default Checkout
