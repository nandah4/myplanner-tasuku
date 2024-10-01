import { DataContext } from "../context/DataContext"
import { useContext } from "react"

// Hooks use context
const useTaskContext = () => {
    const contextValue = useContext(DataContext);
    if (contextValue === undefined) throw new Error("Can't acces to Context");
    return contextValue;
}

export default useTaskContext;