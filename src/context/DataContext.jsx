import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // State Dark Mode
    const [darkMode, setDarkMode] = useState(false);
    const [tasks, setTasks] = useState([]);

    // Handle data tasks form
    const handleDataForm = (data) => {
        setTasks((prevData) => [...prevData, data])
    }
    return <>
        <DataContext.Provider value={{ darkMode, setDarkMode, tasks, handleDataForm }}>
            {children}
        </DataContext.Provider>
    </>
}

export { DataProvider, DataContext };