import React from 'react';
import './Product.css'
const Product = (props) => {

    const { name, seller, price, img, stock, star, features } = props.product;

    return (
        <div>
            <div className="prodcut">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="description">
                    <h4 className="title">{name}</h4>
                    <div className="inner-container">
                        <div>
                            <p className="seller">Manufacturer: {seller}</p>
                            <p className="price">Price: ${price}</p>
                            <p className="stock">Only {stock} itmes left in stock-order soon.</p>
                            <button className="addbtn" onClick={() => props.handleAddToCart(props.product)}><i class="fas fa-shopping-cart size"></i> Add to cart</button>
                        </div>
                        <div className="extra-contain">
                            <p>Rating: {star} </p>
                            <p className="feature"> Features:</p>
                            {
                                features.map(feature => <li className="li" key={feature.description}> {feature.description} : {feature.value}</li>)
                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Product;