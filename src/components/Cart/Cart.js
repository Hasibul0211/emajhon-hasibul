import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let shipping = 0;
    let total = 0;
    let tax = 0
    let totalQuantity = 0
    for (const product of cart) {
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity;
        tax = total * 0.2;


        if (total < 100)
            shipping = 30;
        if (total > 100) {
            shipping = 50;
        }
        if (total > 200) {
            shipping = 60;
        }
        if (total > 300) {
            shipping = 70;
        }
        if (total > 400) {
            shipping = 80;
        }
        if (total > 500) {
            shipping = 100;
        }

    }

    return (
        <div>
            <h3 className="summer-order">Order Summary</h3>
            <h5 className="item-order">Items Ordered:{totalQuantity}</h5>
            <div>
                <div className="price-container">
                    <div className="price-desc">
                        <p>Items Price:</p>
                    </div>
                    <div className="price-desc">
                        <p>$<span>{total.toFixed(2)}</span> </p>
                    </div>
                </div>
                <div className="price-container">
                    <div className="price-desc">
                        <p>Shipping & Handling:</p>
                    </div>
                    <div className="price-desc">
                        <p>$<span>{shipping.toFixed(2)}</span> </p>
                    </div>
                </div>
                <div className="price-container">
                    <div className="price-desc">
                        <p>Total Before Tax:</p>
                    </div>
                    <div className="price-desc">
                        <p>$<span>{(total + shipping).toFixed(2)}</span> </p>
                    </div>
                </div>
                <div className="price-container">
                    <div className="price-desc">
                        <p>Estimate Tax:</p>
                    </div>
                    <div className="price-desc">
                        <p>$<span>{tax.toFixed(2)}</span> </p>
                    </div>
                </div>
                <div className="price-container give-border">
                    <div className="order-total">
                        <p>Order Total:</p>
                    </div>
                    <div className="order-total">
                        <p>$<span>{(total + shipping + tax).toFixed(2)}</span> </p>
                    </div>
                </div>
            </div>
            <button className="order-review">Review Your Order</button>
        </div>
    );
};

export default Cart;