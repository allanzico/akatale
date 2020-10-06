import React from 'react';
import '../Checkout/Checkout.css';
import adBanner from '../../images/ad.jpg';
import Subtotal from '../Subtotal/Subtotal';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../../Providers/StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div>
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src={adBanner} alt="ad" />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">
                            Your Basket
                        </h2>
                        {basket.map(item => (
                            <CheckOutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />

                        ))}

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
