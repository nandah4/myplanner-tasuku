import Logo from "../../assets/logo-study-plan.png"
import { motion } from "framer-motion"
import useTaskContext from "../../hooks/useTaskContext"

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
                        <div className="border w-24 ">
                            <motion.div>

                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    </>
}

export default Header