import MenuLink from "./NavLink.tsx";
import {menuItems} from "../../scripts/data.ts";

function NavList() {
    if(!menuItems || !menuItems.length) return null;
    return (
        <nav className='nav'>
            <ul className='navList flex flex-row gap-x-[30px] md:flex-col md:flec-col gap-y-[30px]'>
                {menuItems.map(item => {
                    return (
                        <MenuLink linkDest={item.href} linkIcon={item.icon} key={item.href}/>
                    )
                })
}
            </ul>
        </nav>
    )
}
export default NavList;