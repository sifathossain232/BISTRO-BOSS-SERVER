import SectionTitel from "../../../Components/SectionTitel/SectionTitel";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-16">
            <SectionTitel
                heading={"From Our Menu"}
                subHeading={"Check it out"}
            ></SectionTitel>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to='/order'>
                <button className="flex mx-auto border-b-2 border-black text-xl rounded-lg py-2 px-5 hover:bg-black hover:text-white mt-5 uppercase">View Full  Menu</button>
            </Link>
        </section>
    );
};

export default PopularMenu;