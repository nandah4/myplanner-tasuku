import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // State Dark Mode
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkmode'));

    return <>
        <DataContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DataContext.Provider>
    </>
}

export { DataProvider, DataContext };