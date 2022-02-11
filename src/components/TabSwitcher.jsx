import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, IconButton, Skeleton, useMediaQuery } from "@mui/material";
import themex from "../theme";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { useNavigate, useParams } from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";
import construction from '../images/construction.svg'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabSwitcher(props) {
  const history = useNavigate();
  const params = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  React.useEffect(() => {
    if (params) {
      const paramValue = props.data.findIndex(
        (e) => e.params == params.calcname
      );
      setValue(paramValue);
    }
  }, [params]);
  return (
    <Box>
      <AppBar
        position={matches ? "static" : "fixed"}
        color="default"
        sx={{ bottom:0,top:'auto' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant=   "fullWidth"
          aria-label="full width tabs example"
        >
          {props.data.map((e, i) => {
            return (
              <Tab
              sx={{minWidth:'20%'}}
                icon={e.icon}
                iconPosition={matches ? "start" : "top"}
                label={matches ? e.name : e.params}
                {...a11yProps(i)}
                onClick={() => {
                  history(e.link);
                }}
                selectionFollowsFocus
              />
            );
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
style={{padding:'0!important'}}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        disabled={true}
      >
        {props.data.map((e, i) => {
          return (
            <TabPanel value={value} index={i} dir={theme.direction} style={{padding:'0!important'}}>
              <Box key={i}>
                {e.component ? (
                  <>{e.component}</>
                ) : (
                  <>
                   <Box className="constructionPage">
                   <Typography variant={matches?'h4':'h6'}>
                     Sorry!
                     </Typography>
                     <img src={construction}></img>
                     <Typography variant={matches?'h6':'button'}>
                       Gold Loan calculator is <strong>Under Construction</strong>
                     </Typography>
                   </Box>
                  </>
                )}
              </Box>
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Box>
  );
}
