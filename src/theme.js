 import { createTheme, unstable_createMuiStrictModeTheme } from '@mui/material';
import { cyan, green, orange, pink } from '@mui/material/colors';

 const mainTheme=(darkMode) =>{
 console.log("🚀 ~ file: theme.js ~ line 5 ~ mainTheme ~ darkMode", darkMode)

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
        light:'#ff0b05',
        dark:'#e20a0a',
        contrastText:'#ffffff',
      }
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          top:{sm:0},
        
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  

});
return theme
 } 

  export default mainTheme