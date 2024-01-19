import { useDispatch } from "react-redux";
import { defaultFoodImg } from "../../constants/restaurants";
import { addItem } from "../../redux/slices/cartSlice";
import styles from './MenuItem.module.scss';

const MenuItem = ({ calories, id, name, price, storeId, storeName }) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addItem({[storeId]: [{ calories, name, price, storeId, storeName, uniqueId: Date.now().toString(36) }]}));
    };
    return (
        <div className={styles.menuItem}>
            <img src={defaultFoodImg} alt={`food-${id}`} />
            <br />
            { name }
            <br />
            {`${(price / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${calories}calories`} 
            <br />
            <button onClick={handleAdd}>add</button>
        </div>
    );
};

export default MenuItem;
