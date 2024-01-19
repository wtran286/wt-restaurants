import { useState } from "react";
import { defaultStoreImg } from "../../constants/restaurants";
import MenuItem from "../MenuItem/MenuItem";
import styles from './Location.module.scss';

const Location = ({ address, hours, menu, phone, storeId, storeName }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = (e) => {
        setOpenMenu(!openMenu)
    };
    return (
        <div className={styles.locations}>
            <img src={defaultStoreImg} alt={`${storeName}-img`}/>
            <br />
            { storeName }
            <br />
            { address }
            <br />
            { phone }
            <br />
            { hours }
            <br />
            <br />
            <button onClick={handleMenu}>
                Menu
            </button>
            <div>
                { openMenu &&
                    <div className={styles.menuDropdown}>
                        { menu.map((item) => 
                            <MenuItem
                                calories={item.calories}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                storeId={storeId}
                                storeName={storeName}
                            />) 
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Location;
