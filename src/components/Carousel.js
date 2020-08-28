import React from "react";
import { Carousel } from 'react-responsive-carousel';
import shoes1 from '../assets/shoesbanner/shoe1.png';
import shoes4 from '../assets/shoesbanner/img1.png';
import shoes5 from '../assets/shoesbanner/download (2).png';
import shoes6 from '../assets/shoesbanner/download (1).png';
import shoes7 from '../assets/shoesbanner/download.png';
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
    <>
        <Carousel autoPlay showStatus={false} showThumbs={false}>
            <div>
                <img alt="" src={shoes4} width="100%" height="600"
                />

            </div>

            <div>
                <img alt="" src={shoes5} width="100%" height="600" />

            </div>

            <div>
                <img alt="" src={shoes6} width="100%" height="600" />
            </div>
            <div>
                <img alt="" src={shoes7} width="100%" height="600" />
            </div>
            <div>
                <img alt="" src={shoes1} width="100%" height="600" />
            </div>
        </Carousel>
        <Product />
    </>
);
