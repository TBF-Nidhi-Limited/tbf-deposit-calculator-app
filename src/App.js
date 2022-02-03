import logo from "./logo.svg";
import "./App.css";
import React, { useState,useContext } from "react";
import { Container, CssBaseline } from "@mui/material";
import Calculator from "./Pages/Calculator";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import mainTheme from "./theme";
import Router from "./router";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <ThemeContextProvider>
              
            <Router/> 
       
        </ThemeContextProvider>
    
      </React.Fragment>
    </div>
  );
}

export default App;
