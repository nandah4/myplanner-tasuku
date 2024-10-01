import Logo from "../../assets/logo-study-plan.png"

const Header = () => {
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
                            <h1 className="text-2xl font-medium">Study Planner</h1>
                            <p className="font-lato text-sm">List your daily planner</p>
                        </div>
                    </div>
                    <div className="border flex justify-between gap-x-4">
                        <h2 className="font-medium">Selamat Datang, Ananda priya Yustira 👼</h2>
                        <div className="h-6 w-6 bg-emerald-400">

                        </div>
                    </div>
                </div>

            </div>
        </header>
    </>
}

export default Header