
import { useSelector } from "react-redux";
import Location from "../../components/Location/Location";
import UserCart from "../../components/UserCart/UserCart";
import { selectLocation } from "../../redux/slices/locationSlice";

import styles from './Menu.module.scss';

const Menu = () => {
    const { location } = useSelector(selectLocation);


    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuLocation}>
                <div className={styles.menuDropdown}>
                    { location.map((loc) => 
                        <Location
                            address={loc.address}
                            hours={loc.hours}
                            key={loc.storeId}
                            menu={loc.menu}
                            openMenu={true}
                            phone={loc.phone}
                            storeId={loc.storeId}
                            storeName={loc.storeName}
                        />)
                    }
                </div>
            </div>
            <UserCart />
        </div>
    );
};

export default Menu;
