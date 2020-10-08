import React from 'react';
import '../Subtotal/Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../Providers/StateProvider';
import { getBasketTotal } from '../../Reducers/Reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    const totalItems = basket.length;



    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (

                    <>
                        <p>
                            Subtotal ({totalItems} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This is a gift
                        </small>
                    </>
                )}
                decimalScale={0}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
