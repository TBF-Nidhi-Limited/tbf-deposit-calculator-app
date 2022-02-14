import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Alert,
  AlertTitle,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
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
import SwipeableEdgeDrawer from "../../components/SwipeDrawer";
import daysToWeeks from "date-fns/daysToWeeks/index.js";
import { DatePicker, DesktopDatePicker } from "@mui/lab";
import Alerts from "../../components/Alerts";

const DepositCalculator = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { data } = props;
  const { darkMode, handleThemeChange } = React.useContext(ThemeContext);

  const [rate, setRate] = React.useState(data.rate);
  const [trigger, setTrigger] = React.useState(false);
  const [interest, setInterest] = React.useState(data.interest);
  const [period, setPeriod] = React.useState(data.period);
  const [value, setValue] = React.useState([new Date(), addDaysToDate(10)]);
  const [startdate, setStartdate] = React.useState(new Date());
  const [enddate, setEnddate] = React.useState(addDaysToDate(10));
  const [days, setDays] = React.useState(0);
  const [totalIntrest, setTotalIntrest] = React.useState(0);
  function addDaysToDate(value) {
    var res = new Date();
    res.setDate(res.getDate() + value);
    return res;
  }

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 0.5,
      label: "6",
    },
    {
      value: 1,
      label: "12",
    },
    {
      value: 1.5,
      label: "18",
    },
    {
      value: 2,
      label: "24",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) * 6;
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
  const handledaysInputChange = (event) => {
    setDays(event.target.value === "" ? "" : Number(event.target.value));
  };
  const [isdays, setIsdays] = React.useState(false);
  const CalculateAmount = (rate, interest, period) => {
    if (data.type === "rd") {
      let time = period * 12;
      let total_interest = Math.round(
        (rate * (time * (time + 1)) * interest) / 2400
      );
      let total_amount = parseInt(total_interest) + parseInt(time * rate);
      let total_invested = rate * time;
      return { total_amount, total_interest, total_invested };
    } else if (data.type === "fd") {
      let time = period * 12;
      let total_interest = Math.round((rate * (interest / 100)) / 12);
      let total_amount = total_interest * time;
      let total_invested = rate;
      return { total_amount, total_interest, total_invested };
    } else if (data.type === "cd") {
      let time = period * 4;

      let initial_interest = Math.pow(1 + interest / 100 / 4, time);
      let total_interest = Math.round(
        parseFloat(initial_interest * rate) - parseFloat(rate)
      );
      let total_amount = Math.round(initial_interest * rate);
      let total_invested = rate;
      return { total_amount, total_interest, total_invested };
    } else if (data.type === "gl") {
      let daysdiff = parseInt(period);
      let total_interest = Math.round(
        (rate * interest * daysdiff) / (100 * 365)
      );
      let total_amount = Math.round(total_interest + rate);
      let total_invested = rate;
      return { total_amount, total_interest, total_invested };
    }
  };
  React.useEffect(() => {
    if (startdate && enddate) {
      setDays(
        parseInt(
          Math.round(
            (enddate.getTime() - startdate.getTime()) / (1000 * 3600 * 24)
          )
        )
      );
    }
  }, [startdate, enddate]);
  React.useEffect(() => {
    setTotalIntrest(CalculateAmount(rate, interest, days).total_interest);
  }, [days || rate]);

  return (
    <>
      <Grid container spacing={matches ? 3 : 1}>
        <Grid item xs={12} lg={8}>
          <Alerts
            trigger={trigger}
            data={"Date Cannot be greater than start Date"}
          />
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
                        max={100000}
                        color={darkMode ? "secondary" : "primary"}
                        value={rate}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                      <FormControl
                        fullWidth
                        variant="standard"
                        color={darkMode ? "secondary" : "primary"}
                      >
                        <Input
                          type="number"
                          sx={{
                            fontSize: matches ? 30 : 20,
                            textAlign: "right",
                          }}
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
                        max={data.type==='gl'?18:12}
                        color={darkMode ? "secondary" : "primary"}
                        value={typeof interest === "number" ? interest : 0}
                        onChange={handleinterestSliderChange}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                      <FormControl
                        fullWidth
                        variant="standard"
                        color={darkMode ? "secondary" : "primary"}
                      >
                        <Input
                          sx={{
                            fontSize: matches ? 30 : 20,
                            textAlign: "right",
                          }}
                          value={interest}
                          type="number"
                          variant="filled"
                          onChange={handleinterestInputChange}
                          endAdornment={
                            <InputAdornment position="start">%</InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              {data.type === "gl" ? (
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ padding: 2 }}>
                    <Grid
                      container
                      spacing={matches ? 3 : 0}
                      alignItems="center"
                    >
                      <Grid item xs={8} md={12}>
                        <Typography
                          id="input-slider"
                          variant={matches ? "h6" : "button"}
                          gutterBottom
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          Time Period
                          <small>
                            {data.type !== "gl" ? (
                              "(months)"
                            ) : (
                              <>
                                <FormGroup sx={{ marginLeft: 2 }}>
                                  <FormControlLabel
                                    sx={{ fontSize: "5px" }}
                                    control={
                                      <Switch
                                        color={
                                          darkMode ? "secondary" : "primary"
                                        }
                                        onChange={(e) =>
                                          setIsdays(e.target.checked)
                                        }
                                        name="Days"
                                        size="small"
                                      />
                                    }
                                    label="Days"
                                  />
                                </FormGroup>
                              </>
                            )}
                          </small>
                        </Typography>
                      </Grid>
                      {!isdays && (
                        <Grid
                          item
                          xs={12}
                          md={10}
                          order={{ xs: 2, md: 1 }}
                          sx={{ marginTop: matches ? 0 : 2 }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            {/* <DateRangePicker
                                   color="warning"
                                   calendars={2}
                                   value={value}
                                   onChange={(newValue) => {
                                     setValue(newValue);
                                   }}
                                   renderInput={(startProps, endProps) => (
                                     <React.Fragment>
                                       <Box
                                         sx={{
                                           display: "flex",
                                           alignItems: matches ? "center" : undefined,
                                           flexDirection: matches ? "row" : "column",
                                           justifContent: "stretch",
                                           width: matches ? "auto" : "100%",
                                         }}
                                       >
                                         <TextField
                                           {...startProps}
                                           label="Start Date"
                                           sx={{ marginBottom: matches ? 0 : 2 }}
                                         />
                                         <Box
                                           sx={{
                                             mx: 2,
                                             display: matches ? "block" : "none",
                                           }}
                                         >
                                           to
                                         </Box>
                                         <TextField
                                           {...endProps}
                                           label="End Date"
                                           sx={{ marginBottom: matches ? 0 : 2 }}
                                         />
                                       </Box>
                                     </React.Fragment>
                                   )}
                                 /> */}
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: matches ? "row" : "column",
                              }}
                            >
                              <DatePicker
                                label="Start Date"
                                inputFormat="dd/MM/yyyy"
                                value={startdate}
                                onChange={(newValue) => {
                                  setStartdate(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    readOnly={true}
                                    {...params}
                                    color={darkMode ? "secondary" : "primary"}
                                    sx={{
                                      width: matches ? undefined : "100%",
                                      marginBottom: matches ? 0 : 2.5,
                                    }}
                                  />
                                )}
                              />
                              <Typography
                                sx={{
                                  mx: 2,
                                  display: matches ? "block" : "none",
                                }}
                              >
                                to
                              </Typography>
                              <DatePicker
                                label="End Date"
                                inputFormat="dd/MM/yyyy"
                                value={enddate}
                                minDate={startdate}
                                onChange={(newValue) => {
                                  setEnddate(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    readOnly={true}
                                    {...params}
                                    color={darkMode ? "secondary" : "primary"}
                                    sx={{ width: matches ? undefined : "100%" }}
                                  />
                                )}
                              />
                            </Box>
                          </LocalizationProvider>
                        </Grid>
                      )}

                      <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                        <FormControl
                          fullWidth
                          variant="standard"
                          color={darkMode ? "secondary" : "primary"}
                        >
                          <Input
                            sx={{
                              fontSize: matches ? 30 : 20,
                              textAlign: "right",
                            }}
                            value={days}
                            readOnly={!isdays}
                            type="number"
                            variant="filled"
                            onChange={handledaysInputChange}
                            endAdornment={
                              <InputAdornment position="start">
                                Days
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ padding: 2 }}>
                    <Grid
                      container
                      spacing={matches ? 3 : 0}
                      alignItems="center"
                    >
                      <Grid item xs={8} md={12}>
                        <Typography
                          id="input-slider"
                          variant={matches ? "h6" : "button"}
                          gutterBottom
                        >
                          Time Period <small>(months)</small>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10} order={{ xs: 2, md: 1 }}>
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
                          color={darkMode ? "secondary" : "primary"}
                          value={typeof period === "number" ? period : 0}
                          onChange={handleperiodSliderChange}
                          aria-labelledby="input-slider"
                        />
                      </Grid>
                      <Grid item xs={4} md={2} order={{ xs: 1, md: 2 }}>
                        <FormControl
                          fullWidth
                          variant="standard"
                          color={darkMode ? "secondary" : "primary"}
                        >
                          <Input
                            sx={{
                              fontSize: matches ? 30 : 20,
                              textAlign: "right",
                            }}
                            readOnly={true}
                            value={period * 12}
                            type="number"
                            variant="filled"
                            onChange={handleperiodInputChange}
                            endAdornment={
                              <InputAdornment position="start">
                                Months
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              )}
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
                  sx={{
                    padding: 0.5,
                    bgcolor: red[!darkMode ? 100 : 600],
                    color: red[!darkMode ? 600 : 50],
                  }}
                >
                  <Typography variant={matches ? "h6" : "button"}>
                    {data.type === "fd"
                      ? "Monthly Interest"
                      : " Interest Amount"}
                  </Typography>

                  <Typography
                    variant={matches ? "h4" : "h6"}
                    sx={{ marginY: matches ? 2 : 1 }}
                  >
                    <small>₹ </small>
                    <strong>
                      {CalculateAmount(
                        rate,
                        interest,
                        data.type === "gl" ? days : period
                      ).total_interest.toLocaleString("en-IN")}
                    </strong>
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
                    bgcolor: blue[!darkMode ? 100 : 600],
                    color: blue[!darkMode ? 600 : 50],
                  }}
                >
                  <Typography variant={matches ? "h6" : "button"}>
                    Invested Amount
                  </Typography>

                  <Typography
                    variant={matches ? "h4" : "h6"}
                    sx={{ marginY: matches ? 2 : 1 }}
                  >
                    <small>₹ </small>
                    <strong>
                      {CalculateAmount(
                        rate,
                        interest,
                        data.type === "gl" ? days : period
                      ).total_invested.toLocaleString("en-IN")}
                    </strong>
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
                  sx={{
                    padding: 0.5,
                    bgcolor: green[!darkMode ? 100 : 600],
                    color: green[!darkMode ? 600 : 50],
                  }}
                >
                  <Typography variant={matches ? "h6" : "button"}>
                    {data.type === "fd"
                      ? "Total Yearly Interest"
                      : " Total Amount"}
                  </Typography>

                  <Typography
                    variant={matches ? "h4" : "h6"}
                    sx={{ marginY: matches ? 2 : 1 }}
                  >
                    <small>₹ </small>
                    <strong>
                      {CalculateAmount(
                        rate,
                        interest,
                        data.type === "gl" ? days : period
                      ).total_amount.toLocaleString("en-IN")}
                    </strong>
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
                    type={data.type}
                    intrest={
                      CalculateAmount(
                        rate,
                        interest,
                        data.type == "gl" ? days : period
                      ).total_interest
                    }
                    invested={
                      CalculateAmount(
                        rate,
                        interest,
                        data.type == "gl" ? days : period
                      ).total_invested
                    }
                    total={
                      CalculateAmount(
                        rate,
                        interest,
                        data.type == "gl" ? days : period
                      ).total_amount
                    }
                    mode={darkMode}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DepositCalculator;
