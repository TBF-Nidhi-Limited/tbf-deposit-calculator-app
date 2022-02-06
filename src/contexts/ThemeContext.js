import * as React from "react";

export const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [darkMode, setDarkmode] = React.useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  React.useEffect(
    ()=>{
      localStorage.setItem("darkMode", darkMode);    
    },[darkMode]
  )
  const handleThemeChange = () => {
      setDarkmode(!darkMode);
  };
  const value = { darkMode, handleThemeChange };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
