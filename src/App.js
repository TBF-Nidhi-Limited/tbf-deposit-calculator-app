import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import Calculator from "./Pages/Calculator";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import mainTheme from "./theme";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const handleThemeChange = () => {
    setDarkmode(!darkMode);
  };
  return (
    <div className="App">
      <React.Fragment>
        <ThemeProvider theme={mainTheme(darkMode)}>
          <CssBaseline />
          <Calculator
            darkMode={darkMode}
            handleThemeChange={handleThemeChange}
          />
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
