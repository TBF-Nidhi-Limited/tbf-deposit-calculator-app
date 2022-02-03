import React, { Component, Fragment } from "react";
import TopBar from "./components/TopBar";

const Combiner = (HigherComponent) => {
    return class extends Component {

      render() {
     
        return (
          <Fragment> 
              <TopBar/>           
            <HigherComponent/>
          </Fragment>
        );
      }
    };
  };
  
  export default Combiner;