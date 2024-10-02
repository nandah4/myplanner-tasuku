import Logo from "../../assets/logo-study-plan.png"
import { AnimatePresence, motion } from "framer-motion"
import useTaskContext from "../../hooks/useTaskContext"
import { FaSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
    const { darkMode, setDarkMode } = useTaskContext();

    return <>
        <header className="border-b font-poppins">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-6">
                    {/* div Logo */}
                    <div className="flex gap-x-3">
                        <div className="h-14 w-14 overflow-hidden">
                            <img src={Logo} alt="Logo Study Plan" className="w-full h-full" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-medium">Tasuku Planer.</h1>
                            <p className="font-lato text-sm">Record your activities.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-x-4">

                        <h2 className="font-normal">Selamat Datang, Ananda priya Yustira 👼</h2>

                        <div className="border rounded-lg h-10 w-10 overflow-hidden  flex justify-center">

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
                                        <FaRegMoon className="text-yellow-400 text-2xl" />
                                    </motion.button> : (
                                        <motion.button
                                            key="sun-button"
                                            initial={{ y: -100 }}
                                            animate={{ y: [50, -8, 0] }}
                                            exit={{ y: [0, -8, 50], }}
                                            transition={{ duration: .5, times: [0.3], ease: 'easeInOut' }}
                                            onClick={() => setDarkMode((isFakeDark) => !isFakeDark)}
                                        >
                                            <FaSun className="text-yellow-400 text-2xl" />
                                        </motion.button>
                                    )
                                }
                            </AnimatePresence>


                        </div>
                    </div>
                </div>

            </div>
        </header >
    </>
}

export default Header