import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <>
        <nav className="mt-5 py-2 border-b">
            <ul className="flex gap-x-14">
                <li>
                    <NavLink to="/home" className={({ isActive }) =>
                        isActive
                            ? "style-nav-active"
                            : "style-nav-nonActive"
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tasks" className={({ isActive }) =>
                        isActive
                            ? "style-nav-active"
                            : "style-nav-nonActive"
                    }>
                        Task
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" className={({ isActive }) =>
                        isActive
                            ? "style-nav-active"
                            : "style-nav-nonActive"
                    }>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
}
export default Navbar;