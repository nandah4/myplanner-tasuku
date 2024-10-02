import Header from "../components/layouts/Header";
import useTaskContext from "../hooks/useTaskContext";
import { useEffect } from "react";

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
        <Header />

        <p className="text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, et!</p>
    </>
}

export default AppLayout;