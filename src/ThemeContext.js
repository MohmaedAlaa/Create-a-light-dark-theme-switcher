import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState('light');
    const toggleTheme = () =>{
        theme === 'light' ? setTheme ('dark') : setTheme ('light')
        return theme;
    }
    return <ThemeContext.Provider value={{theme , toggleTheme}}>{children}</ThemeContext.Provider>;

}

export const useTheme = () => useContext(ThemeContext);
