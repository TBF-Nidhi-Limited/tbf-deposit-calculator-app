 import { createTheme, unstable_createMuiStrictModeTheme } from '@mui/material';

 const mainTheme=(darkMode) =>{

const theme= createTheme({
   
  palette: {
    mode: darkMode?'dark':'light',
      primary:{
        main:'#000168',
        light:'#2426f8',
        dark:'#06074d',
        contrastText:'#ffffff',
      },
      secondary:{
        main:'#fe0b0b',
        light:'#f24343',
        dark:'#e20a0a',
        contrastText:'#ffffff',
      }
  },
  shape: {
    borderRadius: 8,
  },

});
return theme
 } 

  export default mainTheme