import React from 'react';
import Combiner from '../../Combiner';
import CalculatorConfig from './CalculatorConfig';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
const Calculator = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box sx={{marginBottom:8,marginTop:matches?8:7}}>
     <CalculatorConfig/>
        </Box>
    );
}

export default Combiner(Calculator);