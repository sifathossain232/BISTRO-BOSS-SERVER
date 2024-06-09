import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10  mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={'/order'}>
                <button className="flex mx-auto border-b-2 border-black text-xl rounded-lg py-2 px-5 hover:bg-black hover:text-white my-8 uppercase">View Full  Menu</button>
            </Link>
        </div>
    );
};

export default MenuCategory;