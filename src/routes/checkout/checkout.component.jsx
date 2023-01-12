import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../../components/cart-item/cart-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <div className='cart-items'>
                {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                ) : (
                <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
        </div>
    )
};

export default Checkout;