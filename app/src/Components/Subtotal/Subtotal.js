import React from 'react';
import '../Subtotal/Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../Providers/StateProvider';


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const totalItems = basket.length;
    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (

                    <>
                        <p>
                            Subtotal ({totalItems} items): <strong>{}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This is a gift
                        </small>
                    </>
                )}
                decimalScale={0}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"UGX"}

            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
