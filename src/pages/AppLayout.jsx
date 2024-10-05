import useTaskContext from "../hooks/useTaskContext";
import { useEffect } from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import Home from "./Home";
import { Outlet } from "react-router";

const AppLayout = () => {
    const { darkMode, setDarkMode } = useTaskContext();

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('darkmode');
    //     } else {
    //         document.documentElement.classList.remove('darkmode');
    //     }
    // }, [darkMode])

    return <>
        <main className="flex">
            <Sidebar />
            <div className="flex-1">
                <Outlet />
            </div>
        </main>
    </>
}

export default AppLayout;