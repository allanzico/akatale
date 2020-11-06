import React from 'react';
import '../Product/Product.css';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { useStateValue } from '../../Providers/StateProvider';
import { Flip, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutProduct from '../Checkout/CheckOutProduct';
import { CheckCircleOutline } from '@material-ui/icons';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Reducers/Reducer';
import { css } from 'glamor';
import { Link, useHistory } from 'react-router-dom';


toast.configure()
function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    const CustomToast = () => {
        return (

            <div className="toast">
                <img className="toast__productImage" alt="" src={image} />
                <div className="toast__productInfo">
                    <p className="toast__productTitle">
                        <div className="toast__icon">
                            <CheckCircleOutline />
                        </div>

                        <h5 className="toast__heading" > Added to basket</h5>
                    </p>
                    <p className="toast__productPrice">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p className="toast__basketButton">
                                        <button onClick={e => history.push('/checkout')}>
                                            Basket({basket.length + 1} items):<strong className="toast__basketButtonPrice">{value}</strong>
                                        </button>
                                    </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket) + price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"€"}
                        />
                    </p>

                </div>
            </div>


        );
    }


    //Showing toast message
    const notify = () => {

        toast(<CustomToast />, {

            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,


        });
    }
    //Add products to basket
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }

        });
        notify();
    };

    return (
        <div className="product">
         <div className="product__image">
         <img src={image} alt="" />
         </div>
            
            <div className="product__info">
               
                <p className="product__title">
                <Link to={"/products/" + id}>
                    <p>{title}</p>
                </Link>
                </p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarOutlinedIcon /></p>
                    ))}
                </div>
                <button onClick={addToBasket}>Add to Basket</button>
            </div>

        </div>
    )


}

export default Product
