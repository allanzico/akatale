
import React, { useState } from 'react';
import { useStateValue } from '../../Providers/StateProvider';
import CheckOutProduct from '../Checkout/CheckOutProduct';
import { Link, useHistory } from 'react-router-dom';
import '../Payment/Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Reducers/Reducer';
import { useEffect } from 'react';
import axios from 'axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [successful, setSuccessful] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
    const elements = useElements();

    //runs when payment component loads
    useEffect(() => {

        //generate stripe secret (Stripe uses cents * 100)
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    //Submit stripe form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSuccessful(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders');
        })
    }


    //Listen for changes in card element and display errors
    const handleChange = e => {

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket?.length}</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Deliver to: </h3>
                    </div>
                    <div className="payment__address">
                        <p>
                            {user?.email}
                        </p>
                        <p>OudeRoswinkelerweg 137</p>
                        <p>7814RS, Emmen</p>
                    </div>
                </div>
                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Review Items and Delivery </h3>
                    </div>
                    <div className="payment__items">
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
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payent Method </h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={0}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                                <button disabled={processing || disabled || successful}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
