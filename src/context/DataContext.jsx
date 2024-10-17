import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // State Dark Mode
    const [darkMode, setDarkMode] = useState(false);
    const [tasks, setTasks] = useState([]);

    // Handle data tasks form
    const [form, setForm] = useState(false)
    const handleDataForm = (data) => {
        setTasks((prevData) => [...prevData, data])
    }

    // handle settings card
    const [settings, setSettings] = useState(null);
    const handleSettingsCard = (id) => {
        settings === id ? setSettings(null) : setSettings(id)
    }

    return <>
        <DataContext.Provider value={{ darkMode, setDarkMode, tasks, handleDataForm, settings, handleSettingsCard, form, setForm }}>
            {children}
        </DataContext.Provider>
    </>
}

export { DataProvider, DataContext };