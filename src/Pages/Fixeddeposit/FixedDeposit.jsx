import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Divider,
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
import { StarRateOutlined, VolumeUp } from "@mui/icons-material";
import { Box } from "@mui/system";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTheme } from "@mui/material/styles";
import {
  blue,
  deepOrange,
  deepPurple,
  green,
  lightGreen,
  purple,
  red,
  yellow,
} from "@mui/material/colors";
import ChartData from "./ChartData";

const FixedDeposit = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { data } = props;
  const { darkMode, handleThemeChange } = React.useContext(ThemeContext);

  const [rate, setRate] = React.useState(data.rate);
  const [interest, setInterest] = React.useState(data.interest);
  const [period, setPeriod] = React.useState(data.period);



  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: .5,
      label: '6',
    },
    {
      value: 1,
      label: '12',
    },
    {
      value: 1.5,
      label: '18',
    },
    {
      value: 2,
      label: '24',
    },
  ];


  function valuetext(value) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value)*6 ;
  }

  const handleSliderChange = (event, newValue) => {
    setRate(newValue);
  };
  const handleinterestSliderChange = (event, newValue) => {
    setInterest(newValue);
  };
  const handleperiodSliderChange = (event, newValue) => {
    setPeriod(newValue);
  };
  const handleInputChange = (event) => {
    setRate(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleinterestInputChange = (event) => {
    setInterest(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleperiodInputChange = (event) => {
    setPeriod(event.target.value === "" ? "" : Number(event.target.value));
  };
  const CalculateAmount = (rate, interest, period) => {
    if (data.type === "rd") {
      let time = period * 12;
      let total_interest = Math.round((rate*(time*(time+1))*interest)/2400)
      let total_amount = parseInt(total_interest) + parseInt(time*rate);
      let total_invested = rate*time;
      return { total_amount, total_interest ,total_invested};
    } else if (data.type === "fd") {
      let time = period * 12;
      let total_interest = Math.round((rate * (interest / 100)) / 12);
      let total_amount = total_interest * time;
      let total_invested = rate;
      return { total_amount, total_interest ,total_invested};
    }
     else if (data.type === "cd") {
      let time = period * 4;
 
      let initial_interest = Math.pow((1+((interest/100)/4)),time); 
      let total_interest = Math.round(parseFloat(initial_interest * rate ) - parseFloat(rate))
      let total_amount = Math.round(initial_interest * rate)
      let total_invested = rate;
      return { total_amount, total_interest ,total_invested};
    }
  };
  return (
    <Grid container spacing={matches ? 3 : 1}>
      <Grid item xs={12} lg={8}>
        <Paper sx={{ padding: 1 }}>
          <Grid container item spacing={matches ? 3 : 1}>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <Grid container spacing={matches ? 3 : 0} alignItems="center">
                  <Grid item xs={8} md={12}>
                    <Typography
                      id="input-slider"
                      variant={matches ? "h6" : "button"}
                      gutterBottom
                    >
                      Investment Amount
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10} order={{ xs: 2, md: 1 }}>
                    <Slider
                      valueLabelDisplay="auto"
                      min={0}
                      defaultValue={100}
                      step={1}
                      max={20000}
                      color={darkMode ? "warning" : "primary"}
                      value={rate}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      color={darkMode ? "warning" : "primary"}
                    >
                      <Input
                        sx={{ fontSize: matches ? 30 : 20, textAlign: "right" }}
                        value={rate}
                        variant="filled"
                        onChange={handleInputChange}
                        startAdornment={
                          <InputAdornment position="start">₹</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <Grid container spacing={matches ? 3 : 0} alignItems="center">
                  <Grid item xs={8} md={12}>
                    <Typography
                      id="input-slider"
                      variant={matches ? "h6" : "button"}
                      gutterBottom
                    >
                      Interest Rate
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10} order={{ xs: 2, md: 1 }}>
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
                  <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      color={darkMode ? "warning" : "primary"}
                    >
                      <Input
                        sx={{ fontSize: matches ? 30 : 20, textAlign: "right" }}
                        value={interest}
                        type='number'
                        variant="filled"
                        onChange={handleinterestInputChange}
                        startAdornment={
                          <InputAdornment position="start">%</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <Grid container spacing={matches ? 3 : 0} alignItems="center">
                  <Grid item xs={8} md={12}>
                    <Typography
                      id="input-slider"
                      variant={matches ? "h6" : "button"}
                      gutterBottom
                    >
                      Time Period <small>(months)</small>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} order={{ xs: 2, md: 1 }}>
                    <Slider
                       valueLabelFormat={valueLabelFormat}
                       getAriaValueText={valuetext}
                      //  step={null}
                       valueLabelDisplay="auto"
                       marks={marks}


                    
                      min={0.5}
                      defaultValue={1}
                      step={0.5}
                      max={2}
                      color={darkMode ? "warning" : "primary"}
                      value={typeof period === "number" ? period : 0}
                      onChange={handleperiodSliderChange}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  {/* <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      color={darkMode ? "warning" : "primary"}
                    >
                      <Input
                        sx={{ fontSize: matches ? 30 : 20, textAlign: "right" }}
                        value={period}
                        type='number'
                        variant="filled"
                        onChange={handleperiodInputChange}
                        endAdornment={
                          <InputAdornment position="start">Year</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid> */}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper sx={{ padding: 1 }}>
          <Grid container item spacing={matches ? 2 : 1}>
            <Grid
              item
              xs={6}
              sx={{ textAlign: "center" }}
              order={matches ? 1 : 4}
            >
              <Paper
                variant="outlined"
                color="primary"
                sx={{ padding: 0.5, bgcolor: red[600], color: "white" }}
              >
                <Typography variant={matches ? "h6" : "button"}>
                {data.type === "fd"?"Monthly Interest":" Interest Amount"}
                </Typography>
                <Divider />
                <Typography
                  variant={matches ? "h4" : "h6"}
                  sx={{ marginY: matches ? 2 : 1 }}
                >
                  ₹
                  {CalculateAmount(
                    rate,
                    interest,
                    period
                  ).total_interest.toLocaleString("en-IN")}
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ textAlign: "center" }}
              order={matches ? 2 : 3}
            >
              <Paper
                variant="outlined"
                color="primary"
                sx={{
                  padding: 0.5,
                  bgcolor: !darkMode ? blue[600] : theme.palette.warning.main,
                  color: "white",
                }}
              >
                <Typography variant={matches ? "h6" : "button"}>
                  Invested Amount
                </Typography>
                <Divider />
                <Typography
                  variant={matches ? "h4" : "h6"}
                  sx={{ marginY: matches ? 2 : 1 }}
                >
                 ₹{" "}
                  {CalculateAmount(
                    rate,
                    interest,
                    period
                  ).total_invested.toLocaleString("en-IN")}
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ textAlign: "center" }}
              order={matches ? 3 : 2}
            >
              <Paper
                variant="outlined"
                sx={{ padding: 0.5, bgcolor: green[600], color: "white" }}
              >
                <Typography variant={matches ? "h6" : "button"}>
                 {data.type === "fd"?"Total Yearly Interest":" Total Amount"}
                </Typography>
                <Divider />
                <Typography
                  variant={matches ? "h4" : "h6"}
                  sx={{ marginY: matches ? 2 : 1 }}
                >
                  ₹
                  {CalculateAmount(
                    rate,
                    interest,
                    period
                  ).total_amount.toLocaleString("en-IN")}
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ textAlign: "center" }}
              order={matches ? 4 : 4}
            >
              <Paper variant="outlined" sx={{ padding: 0.5 }}>
                <ChartData
                  intrest={CalculateAmount(rate, interest, period).total_interest}
                  invested={CalculateAmount(rate, interest, period).total_invested}
                  mode={darkMode}
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FixedDeposit;
