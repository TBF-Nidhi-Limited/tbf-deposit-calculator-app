import * as React from "react";



export const ThemeContext=React.createContext()

function ThemeContextProvider(props){
    const [darkMode, setDarkmode] = React.useState(false);
    const handleThemeChange = () => {
     localStorage.setItem('darkMode',!darkMode)
      setDarkmode(!darkMode);
    };
    const value = {darkMode,handleThemeChange}
    return(
        <ThemeContext.Provider value={value}>
        {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider