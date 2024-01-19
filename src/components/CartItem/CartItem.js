import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
import { defaultFoodImg } from "../../constants/restaurants";

import styles from './CartItem.module.scss';

const CartItem = ({calories, name, price, storeId, uniqueId}) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeItem({storeId, uniqueId}));
    };

    return (
        <div className={styles.cartItem}>
            <img src={defaultFoodImg} alt={`food-${uniqueId}`} />
            <br />
            <div>{ name }</div>
            {`${(price / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${calories}calories`} 
            <br />
            <button onClick={handleRemove}>remove</button>
         </div>
    );
};

export default CartItem;
