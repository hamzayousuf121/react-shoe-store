import React from 'react';
import { useParams } from "react-router-dom";
import Shoes from '../shoes.json';
function ProductDetails() {
    const { id } = useParams();
    const Shoe = Shoes[id]
    return (
        <div className="container mt-5">
            <h1 className="text-center">{id}</h1>
            <div className="col-md-12">
                <h3>{Shoe.name}</h3>
                <img src={Shoe.img} alt={Shoe.name} title={Shoe.name} className="img-fluid w-100 h-50 img-thumbnail" />
                <h3>Price {Shoe.price}</h3>
            </div>
        </div>
    )
}

export default ProductDetails
