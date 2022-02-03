import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, IconButton, Skeleton, useMediaQuery } from '@mui/material';
import themex from '../theme'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { useNavigate,useParams } from 'react-router-dom';
import HiveIcon from "@mui/icons-material/Hive";

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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabSwitcher(props) {
  const history = useNavigate()
  const params = useParams()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

React.useEffect(
  ()=>{
    if(params){
      const paramValue= props.data.findIndex(e=> e.params==params.calcname)
      setValue(paramValue)
    }
  },[value]
)
  return (
    <Box>
      <AppBar position="static" color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant={matches?'fullWidth':'scrollable'}
          scrollButtons={true}   
          allowScrollButtonsMobile={true}
          aria-label="full width tabs example"
        >
          {props.data.map((e,i)=>{
            return (
              <Tab sx={{width:'100%'}} icon={e.icon} iconPosition="start" label={e.name} {...a11yProps(i)} onClick={()=>{history(e.link)}} selectionFollowsFocus  />
            )
          })}


        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          {props.data.map((e,i)=>{
            return (
              <TabPanel value={value} index={i} dir={theme.direction}>
              <Box key={i}>
                {e.name}
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
    </Box>
      
            </TabPanel>
            )
          })}
     
   
      </SwipeableViews>
    </Box>
  );
}
