import React, { Component, Fragment } from "react";
import { useMediaQuery } from "@mui/material";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import { useTheme } from "@mui/material/styles";

const Combiner = (HigherComponent, classes) => {
  return (props) => {
    return (
      <div className={classes}>
        <TopBar />
        <HigherComponent {...props} />
      </div>
    );
  };
};



export default Combiner;
