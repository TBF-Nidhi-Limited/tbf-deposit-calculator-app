import React, { Component, Fragment } from "react";
import TopBar from "./components/TopBar";

const Combiner = (HigherComponent) => {
    return class extends Component {

      render() {
     
        return (
          <Fragment> 
              <TopBar {...this.props}/>           
            <HigherComponent {...this.props}/>
          </Fragment>
        );
      }
    };
  };
  
  export default Combiner;