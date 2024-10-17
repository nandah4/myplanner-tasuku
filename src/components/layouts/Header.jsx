import Logo from "../../assets/logo-study-plan.png"
import { AnimatePresence, motion } from "framer-motion"
import useTaskContext from "../../hooks/useTaskContext"
import { FaSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import ButtonDarkMode from "../buttons/ButtonDarkMode";
import Navbar from "./NavBar";

const Header = () => {
    const { darkMode, setDarkMode } = useTaskContext();

    return <>
        <header className="font-poppins w-full">
            <div className="flex justify-between items-center">
                {/* div Logo */}
                <div className="flex gap-x-3">
                    <div className="h-10 w-10 overflow-hidden">
                        <img src={Logo} alt="Logo Study Plan" className="w-full h-full" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Tasuku Planer.</h1>
                        <p className="font-lato text-sm">Record your activities.</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <p className={`font-medium text-sm ${darkMode ? 'text-red-500' : ''}`}>You are on {darkMode ? 'Dark Mode' : 'Light Mode'}</p>
                    <ButtonDarkMode />
                </div>
            </div>
            <Navbar></Navbar>
        </header >
    </>
}

export default Header