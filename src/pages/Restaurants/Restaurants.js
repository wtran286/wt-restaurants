import { useEffect, useState } from "react";
import Location from "../../components/Location/Location";
import { mockRestaurants } from "../../constants/restaurants";
import UserCart from "../../components/UserCart/UserCart";

import styles from './Restaurants.module.scss';

const Restaurants = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setLocations(mockRestaurants);
    }, []);

    return (
        <div className={styles.restaurantsContainer}>
            <div className={styles.restaurantLocation}>
                { locations.map((loc) => 
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
