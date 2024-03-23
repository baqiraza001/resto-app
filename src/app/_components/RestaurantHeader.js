import Link from "next/link";

const RestaurantHeader = () => {
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/online-delivery-courier-service-delivery-fast-money-map-tracking-scooter-vector-illustration_123447-5067.jpg?size=626&ext=jpg" style={{ width: 150}} />
            </div>

            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Login/Signup</Link></li>
                <li><Link href="/">Profile</Link></li>
            </ul>
        </div>
    );
}

export default RestaurantHeader;