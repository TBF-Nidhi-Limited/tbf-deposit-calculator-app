import { height } from "@mui/lab/node_modules/@mui/system";
import { createTheme, unstable_createMuiStrictModeTheme } from "@mui/material";
import { cyan, green, orange, pink } from "@mui/material/colors";

const mainTheme = (darkMode) => {
  console.log("🚀 ~ file: theme.js ~ line 5 ~ mainTheme ~ darkMode", darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#000168",
        light: "#2426f8",
        dark: "#06074d",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#fe0b0b",
        light: "#ff0b05",
        dark: "#e20a0a",
        contrastText: "#ffffff",
      },
    },

    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            height: 3,
            top: { sm: 0 },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: darkMode ? "#ffffff" : undefined,
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          track: {
            height: "10px",
          },
          rail: {
            height: "10px",
          },
          thumb: {
            color: darkMode ? "#ffffff" : "",
            height: "25px",
            width: "25px",
            border: "3px solid #ffffff",
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          avatar: {
            marginRight: 0,
          },
        },
      },
  
      MuiDateRangePickerDay: {
        styleOverrides: {
          day: {
            background: "rgb(254 11 11)",
          },
          selected: {
            background: "rgb(254 11 11)",
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
  return theme;
};

export default mainTheme;
