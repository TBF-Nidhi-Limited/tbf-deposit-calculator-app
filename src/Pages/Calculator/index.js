import React from 'react';
import Combiner from '../../Combiner';
import CalculatorConfig from './CalculatorConfig';


const Calculator = (props) => {
    return (
        <div>
     <CalculatorConfig/>
        </div>
    );
}

export default Combiner(Calculator);