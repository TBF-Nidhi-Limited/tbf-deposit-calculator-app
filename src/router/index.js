import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import Calculator from "../Pages/Calculator";
import Home from "../Pages/Home";
import mainTheme from "../theme";

const Router = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={mainTheme(darkMode)}>
        <CssBaseline />
        <BrowserRouter>
          {/* <Routes>
            <Route path="*" element={<Navigate to="/calculator/home"/>} />
            <Route path="calculator" element={<Calculator />}>
              <Route path=":calcname" element={<Calculator />} />
            </Route>
          </Routes> */}
          <Routes>
              <Route exact path="/" element={<Navigate to="/home"/>} />
              <Route exact path="/:calcname" element={<Calculator/>}/>
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Router;
