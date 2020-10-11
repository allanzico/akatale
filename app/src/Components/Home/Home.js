import React from 'react';
import '../Home/Home.css';
import banner from '../../images/banner.jpg';
import Product from '../Product/Product';
import bag from '../../images/bag.png';
import cap from '../../images/cap.png';
import car from '../../images/car.png';

function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={banner} alt="banner" />
                <div className="home__row">
                    <Product title="Lorem ipsum dolor sit, amet consectetur " id={1} price={20000} image={bag} rating={3} />
                    <Product title="Lorem ipsum dolor sit, amet consectetur " id={2} price={50000} image={cap} rating={4} />
                </div>
                <div className="home__row">
                    <Product title="Lorem ipsum dolor sit, amet consectetur " id={3} price={10000000} image={car} rating={2} />
                    <Product title="Lorem ipsum dolor sit, amet consectetur " id={4} price={50000} image={cap} rating={1} />
                    <Product title="Lorem ipsum dolor sit, amet consectetur " id={5} price={20000} image={bag} rating={5} />

                </div>
                <div className="home__row">
                    <Product title="Lorem ipsum dolor sit, amet consectetur " id={6} price={10000000} image={car} rating={2} />
                </div>

            </div>
        </div>
    )
}

export default Home
