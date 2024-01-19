import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../redux/slices/cartSlice";
import CartItem from "../CartItem/CartItem";
import styles from './UserCart.module.scss';

const UserCart = ({ isCheckoutPage = false }) => {
    const cartData = useSelector(selectCart);
    const navigate = useNavigate();
    const cartItems = [];
    let total = 0;

    Object.keys(cartData).forEach((key) => {
        cartData[key][0] && cartItems.push(<h2>{ cartData[key][0].storeName }</h2>);
        cartItems.push(...cartData[key].map((item) => {
            total += item.price
            return (
                <CartItem
                    key={item.uniqueId}
                    calories={item.calories}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    storeId={item.storeId}
                    uniqueId={item.uniqueId}
                />
            )
        }));
    })
    const displayCart = cartData && (<div className={isCheckoutPage ? styles.checkout : styles.userCart}>
            <h2>{ isCheckoutPage ? 'Checkout Page' : 'Cart' }</h2>
            <hr />
            { cartItems }
            <div className={styles.total}>Total : {`${(total / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})}`}</div>
            <div className={styles.viewCart}>
                <button onClick={() => navigate(isCheckoutPage ? "/" : "/checkout")}>{isCheckoutPage ? "Back to Main Page" : "View Cart / Checkout" }</button>
            </div>
        </div>);

    return displayCart;
};

export default UserCart;
