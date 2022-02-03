import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React, { useContext } from 'react'
import {
    BrowserRouter,
    Navigate,
    Routes,
    Switch,
    Route,
  } from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';
import Calculator from '../Pages/Calculator';
import Home from '../Pages/Home';
import mainTheme from '../theme';


const Router =()=>{
  const {darkMode}=useContext(ThemeContext)

    return(
        <>
        <ThemeProvider theme={mainTheme(darkMode)}>
        <CssBaseline /> 
           <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/calculator" />} />
              <Route exact path="/calculator" element={<Home/>}/>
              <Route exact path="/calculator/:calcname" element={<Calculator/> }/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
         
        </>
    )
}

export default Router