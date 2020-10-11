import React from 'react';
import '../Checkout/Checkout.css';
import adBanner from '../../images/ad.jpg';
import Subtotal from '../Subtotal/Subtotal';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../../Providers/StateProvider';
import { DeleteOutline } from '@material-ui/icons';
import FlipMove from 'react-flip-move';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    //Emptyy basket

    const emptyBasket = () => {
        dispatch({
            type: 'EMPTY_BASKET'
        })
    }

    return (
        <div>
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src={adBanner} alt="ad" />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <div className="checkout__title">
                            <h2>Your Basket</h2>
                            {basket.length < 1 ? '' : <button onClick={e =>
                                window.confirm("Are you sure you wish to empty this basket?") &&
                                emptyBasket(e)} ><DeleteOutline />Empty Basket</button>}

                        </div>

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
