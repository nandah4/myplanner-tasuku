import Logo from "../../assets/logo-study-plan.png"
import { AnimatePresence, motion } from "framer-motion"
import useTaskContext from "../../hooks/useTaskContext"
import { FaSun } from "react-icons/fa6";

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
                    <div className="flex justify-between gap-x-4">
                        <button
                            onClick={() => setDarkMode((isFakeDark) => !isFakeDark)}
                            className="btn-fake-dark-mode"
                        >
                            {darkMode ? "☀️" : "🌙"}
                        </button>
                        <h2 className="font-medium">Selamat Datang, Ananda priya Yustira 👼</h2>
                        <div className="border h-10 w-24 overflow-hidden  flex justify-center">

                            {
                                <AnimatePresence>
                                    {
                                        darkMode ? <motion.button
                                            initial={{ y: 0 }}
                                            animate={{ y: [0, 0, 0] }}
                                            exit={{ y: [0, 0], }}
                                            transition={{ duration: 2, times: [0.3, 0.3, 0.2], ease: 'easeInOut' }}
                                            className="border"
                                        >
                                            <FaSun className="bg-red-400 text-2xl" />
                                        </motion.button> : (
                                            <motion.button
                                                initial={{ y: -100 }}
                                                animate={{ y: [100, 20, 0] }}
                                                exit={{ y: [10, 100], }}
                                                transition={{ duration: 2, times: [0.3, 0.3, 0.2], ease: 'easeInOut' }}
                                                className="border"
                                            >
                                                <FaSun className="bg-yellow-400 text-2xl" />
                                            </motion.button>
                                        )
                                    }
                                </AnimatePresence>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </header >
    </>
}

export default Header