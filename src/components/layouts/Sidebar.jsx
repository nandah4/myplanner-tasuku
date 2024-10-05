import Logo from "../../assets/logo-study-plan.png"
import { FaListCheck, FaAngleDown } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(true);

    return <>
        <aside className="w-72 border h-screen p-6">
            {/* Logo */}
            <div className="flex items-center gap-x-3 pb-4 border-b">
                <div className="h-10 w-10">
                    <img src={Logo} />
                </div>
                <div>
                    <h2 className="font-semibold text-base">Planner Tasuku</h2>
                    <p className="text-xs">Record your activities.</p>
                </div>
            </div>

            <div className="py-3">
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-medium tracking-wide text-xs text-[#222831]">General Navigation</h1>
                        <span className="border border-white p-[2px] rounded-lg cursor-pointer hover:border-[#222831]">
                            {
                            }
                            <FaAngleDown className={`text-[#222831] text-base ${isSidebarActive ? 'rotate-0 duration-100' : '-rotate-90 duration-100'}`} onClick={() => setIsSidebarActive(active => !active)} />
                        </span>
                    </div>
                    {
                        isSidebarActive ?
                            <nav className="mt-2">
                                <ul>
                                    <li>
                                        <NavLink to="/home"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-[#FF6600] text-white style-sidebar-navigation"
                                                    : "bg-white style-sidebar-navigation"
                                            }>
                                            <AiOutlineHome className="text-lg" /><span className="text-sm font-normal">Home</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mytasks"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-[#FF6600] text-white style-sidebar-navigation"
                                                    : "bg-white style-sidebar-navigation"
                                            }>
                                            <FaListCheck className="text-lg" /><span className="text-sm font-normal">My Tasks</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-[#FF6600] text-white style-sidebar-navigation"
                                                    : "bg-white style-sidebar-navigation"
                                            }>
                                            <FaRegFileAlt className="text-lg" /><span className="text-sm font-normal">About Tasuku</span></NavLink>
                                    </li>
                                </ul>
                            </nav>
                            : ''
                    }

                </div>
            </div >

        </aside >
    </>
}
export default Sidebar;