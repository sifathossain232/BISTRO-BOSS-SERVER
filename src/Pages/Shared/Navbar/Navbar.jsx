import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed z-10 w-full">
            <div className="flex justify-between items-center bg-black text-white  bg-opacity-30 p-5 max-w-screen-xl">
                <div className="">
                    <h2 className="text-2xl font-extrabold">BISTRO BOSS</h2>
                    <h4 className="text-xl font-bold">RESTAURANT</h4>
                </div>
                <div className="flex gap-3 text-lg font-medium">
                    <Link to='/'>HOME</Link>
                    <Link>DASHBOARD</Link>
                    <Link to='/menu'>OUR MENU</Link>
                    <Link to='/order' className="flex items-center gap-1">ORDER FOOD <GiShoppingCart /></Link>
                    <Link>CONTACT US</Link>
                    <Link>SIGN OUT</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;