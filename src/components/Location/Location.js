import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultStoreImg } from "../../constants/restaurants";
import MenuItem from "../MenuItem/MenuItem";
import { setLocation } from "../../redux/slices/locationSlice";
import styles from './Location.module.scss';


const Location = ({ address, hours, menu, openMenu = false, phone, setLocations, storeId, storeName }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenu = (e) => {
        dispatch(setLocation([{ address, hours, menu, phone, setLocations, storeId, storeName }]));
        navigate(`/${storeName}/menu`)
    };
    const handleReturn = () => {
        navigate("/");
    }
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
                { openMenu && <button onClick={handleReturn}>Return to Main</button>
                }
            </div>
        </div>
    );
};

export default Location;
