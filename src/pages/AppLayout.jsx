import useTaskContext from "../hooks/useTaskContext";
import { useEffect } from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import Home from "./Home";
import { Outlet } from "react-router";
import ButtonDarkMode from "../components/buttons/ButtonDarkMode";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const AppLayout = () => {
    const { darkMode, setDarkMode } = useTaskContext();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('darkmode');
        } else {
            document.documentElement.classList.remove('darkmode');
        }
    }, [darkMode])

    return <>
        <main className="h-screen w-full overflow-hidden">
            {/* <BackgroundBeamsWithCollision>
            </BackgroundBeamsWithCollision> */}
            <div className={`shadow-md w-full mx-auto p-8 ${darkMode ? 'bg-slate-800' : 'bg-white'} z-50 w-full h-[90vh]`}>
                <Header />
                <Outlet />
            </div>
        </main>
    </>
}

export default AppLayout;