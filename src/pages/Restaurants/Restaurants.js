import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Location from "../../components/Location/Location";
import { mockRestaurants } from "../../constants/restaurants";
import UserCart from "../../components/UserCart/UserCart";
import { selectLocation, setLocation } from "../../redux/slices/locationSlice";

import styles from './Restaurants.module.scss';

const Restaurants = () => {
    const dispatch = useDispatch();
    const { location } = useSelector(selectLocation);

    useEffect(() => {
        dispatch(setLocation(mockRestaurants));
    }, [dispatch]);

    return (
        <div className={styles.restaurantsContainer}>
            <div className={styles.restaurantLocation}>
                { location.map((loc) => 
                    <Location
                        address={loc.address}
                        hours={loc.hours}
                        key={loc.storeId}
                        menu={loc.menu}
                        phone={loc.phone}
                        storeId={loc.storeId}
                        storeName={loc.storeName}
                    />)
                }
            </div>
            <UserCart />
        </div>
    );
};

export default Restaurants;
