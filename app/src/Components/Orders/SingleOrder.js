import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckOutProduct from '../Checkout/CheckOutProduct';
import '../Orders/Orders.css';

function SingleOrder({ order }) {
    return (
        <div className="singleOrder">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="singleOrder__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="singleOrder__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}

            />
        </div>
    )
}

export default SingleOrder

