import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  FilledInput,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Paper,
  Slider,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import { Box } from "@mui/system";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTheme } from "@mui/material/styles";
const FixedDeposit = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { darkMode, handleThemeChange } = React.useContext(ThemeContext);

  const [rate, setRate] = React.useState(100);
  const [interest, setInterest] = React.useState(8.5);

  const handleSliderChange = (event, newValue) => {
    setRate(newValue);
  };
  const handleinterestSliderChange = (event, newValue) => {
    setInterest(newValue);
  };

  const handleInputChange = (event) => {
    setRate(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleinterestInputChange = (event) => {
    setInterest(event.target.value === "" ? "" : Number(event.target.value));
  };


  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <Paper sx={{ padding: 1 }}>
          <Grid container item spacing={matches?3:1}> 
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
              
                <Grid container  spacing={matches?3:0} alignItems="center">
                  <Grid item xs={8} md={12}>
                  <Typography
                  id="input-slider"
                  variant={matches ? "h6" : "button"}
                  gutterBottom
                >
                Investment Amount
                </Typography>
                  </Grid>
                  <Grid item xs={12} md={10} order={{ xs: 2 , md: 1 }}>
                    <Slider
                   
                      valueLabelDisplay="auto"
                      min={0}
                      defaultValue={100}
                      step={1}
                      max={20000}
                      color={darkMode ? "warning" : "primary"}
                      value={typeof rate === "number" ? rate : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item xs={4} md={2} order={{ xs: 1 , md: 2 }} >
                    <FormControl
                      fullWidth
                      variant="standard"
                      color={darkMode ? "warning" : "primary"}
                    >
                      <Input
                        sx={{ fontSize: matches ? 30 : 20,textAlign:'right' }}
                        value={rate}
                        variant="filled"
                        onChange={handleInputChange}
                        startAdornment={
                          <InputAdornment   position="start">₹</InputAdornment>
                        }

                   
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
              
                <Grid container  spacing={matches?3:0} alignItems="center">
                  <Grid item xs={8} md={12}>
                  <Typography
                  id="input-slider"
                  variant={matches ? "h6" : "button"}
                  gutterBottom
                >
             Interest Rate
                </Typography>
                  </Grid>
                  <Grid item xs={12} md={10} order={{ xs: 2 , md: 1 }}>
                    <Slider
                   
                      valueLabelDisplay="auto"
                      min={0}
                      defaultValue={8.5}
                      step={0.1}
                      max={9}
                      color={darkMode ? "warning" : "primary"}
                      value={typeof interest === "number" ? interest : 0}
                      onChange={handleinterestSliderChange}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item xs={4} md={2} order={{ xs: 1 , md: 2 }} >
                    <FormControl
                      fullWidth
                      variant="standard"
                      color={darkMode ? "warning" : "primary"}
                    >
                      <Input
                        sx={{ fontSize: matches ? 30 : 20,textAlign:'right' }}
                        value={interest}
                        variant="filled"
                        onChange={handleinterestInputChange}
                        startAdornment={
                          <InputAdornment   position="start">%</InputAdornment>
                        }

                   
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper sx={{ padding: 3 }}></Paper>
      </Grid>
    </Grid>
  );
};

export default FixedDeposit;
