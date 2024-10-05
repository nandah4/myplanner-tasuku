import Logo from "../../assets/logo-study-plan.png"
import { FaListCheck, FaHouse, FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";

const Sidebar = () => {
    return <>
        <aside className="w-96 border h-screen p-6">
            {/* Logo */}
            <div className="flex items-center gap-x-3 pb-4 border-b">
                <div className="h-11 w-11">
                    <img src={Logo} />
                </div>
                <div>
                    <h2 className="font-medium text-xl">Planner Tasuku</h2>
                    <p className="text-sm">Record your activities.</p>
                </div>
            </div>

            <div className="py-3">
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="uppercase font-medium tracking-wide text-sm text-[#222831]">General</h1>
                        <span className="border border-white p-[2px] rounded-lg cursor-pointer hover:border-[#222831]">
                            <FaAngleDown className="text-[#222831] text-lg" />
                        </span>
                    </div>
                    <nav className="mt-2">
                        <ul>
                            <li>
                                <NavLink to="/home"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-[#FF6600] text-white style-sidebar-navigation"
                                            : "bg-white style-sidebar-navigation"
                                    }>
                                    <FaHouse className="text-xl" />Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mytasks"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-[#FF6600] text-white style-sidebar-navigation"
                                            : "bg-white style-sidebar-navigation"
                                    }>
                                    <FaListCheck className="text-xl" />My Tasks</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-[#FF6600] text-white style-sidebar-navigation"
                                            : "bg-white style-sidebar-navigation"
                                    }>
                                    <FaRegFileAlt className="text-xl" />About Tasuku</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div >

        </aside >
    </>
}
export default Sidebar;