import Logo from "../../assets/logo-study-plan.png"
import { FaListCheck, FaHouse, FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

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
                    <nav className="ml-4 mt-3">
                        <ul>
                            <li className="flex items-center gap-x-3 mb-3 text-[#222831] tracking-wide font-medium"><FaHouse className="text-xl text-[#222831]" /><NavLink>Home</NavLink></li>
                            <li className="flex items-center gap-x-3 mb-3 text-[#222831] tracking-wide font-medium"><FaListCheck className="text-xl text-[#222831]" /><NavLink>My Tasks</NavLink></li>
                            <li className="flex items-center gap-x-3 mb-3 text-[#222831] tracking-wide font-medium"><FaListCheck className="text-xl text-[#222831]" /><NavLink>About Tasuku</NavLink></li>
                            {/* <li className="flex items-center gap-x-4 mb-2"><FaListCheck className="text-base text-[#697565]" /><NavLink><p className="text-[#697565] text-sm font-medium">My Tasks</p></NavLink></li> */}
                        </ul>
                    </nav>
                </div>
            </div>

        </aside>
    </>
}
export default Sidebar;