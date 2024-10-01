import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // State Dark Mode
    const [darkMode, setDarkMode] = useState(false);

    return <>
        <DataContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DataContext.Provider>
    </>
}

export { DataProvider, DataContext };