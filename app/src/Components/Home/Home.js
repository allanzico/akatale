import React, { useEffect, useState } from 'react';
import '../Home/Home.css';
import banner from '../../images/banner.jpg';
import Product from '../Product/Product';

import { db } from '../../firebase';

function Home() {
    const [products, setProducts] = useState([]);

    //Get data
  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => {
        setProducts(snapshot.docs.map( doc => ({
            id:doc.id,
            product: doc.data()
        })))
    })
  }, [])

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={banner} alt="banner" />
                <div className="home__row">
                    {products.map(({id,product}) => (
                         <Product key={id} title={product.title} id={id} price={product.price} image={product.image} rating={product.rating} />
                    ))}
                    </div>

            </div>
        </div>
    )
}

export default Home
