import UserCart from "../../components/UserCart/UserCart";

const Checkout = () => {

    return (
        <div>
            <UserCart isCheckoutPage={true} />
        </div>
    );
};

export default Checkout;
