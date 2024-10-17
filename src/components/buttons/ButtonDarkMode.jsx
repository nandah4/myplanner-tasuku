import { AnimatePresence, motion } from "framer-motion"
import { FaSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import useTaskContext from "../../hooks/useTaskContext";

const ButtonDarkMode = () => {
    const { darkMode, setDarkMode } = useTaskContext();
    return <>
        <div className="shadow-md rounded-xl bg-[#FFBF61] h-10 w-10 overflow-hidden flex justify-center">
            <AnimatePresence mode="wait">
                {
                    darkMode ? <motion.button
                        key="su-button"
                        initial={{ y: -100 }}
                        animate={{ y: [-50, 8, 0] }}
                        exit={{ y: [0, 8, -50], }}
                        transition={{ duration: .5, times: [.4], ease: 'easeInOut' }}
                        onClick={() => setDarkMode((isFakeDark) => !isFakeDark)}
                    >
                        <FaRegMoon className="text-slate-800 text-xl" />
                    </motion.button> : (
                        <motion.button
                            key="sun-button"
                            initial={{ y: -100 }}
                            animate={{ y: [50, -8, 0] }}
                            exit={{ y: [0, -8, 50], }}
                            transition={{ duration: .5, times: [0.3], ease: 'easeInOut' }}
                            onClick={() => setDarkMode((isFakeDark) => !isFakeDark)}
                        >
                            <FaSun className="text-slate-800 text-xl" />
                        </motion.button>
                    )
                }
            </AnimatePresence>
        </div>
    </>
}

export default ButtonDarkMode;