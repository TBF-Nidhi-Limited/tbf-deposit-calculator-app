import React, { useEffect, useState } from "react";

import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grow from "@mui/material/Grow";
import { useNavigate } from "react-router-dom";
import HomeData from "./HomeData";
import { ThemeContext } from "../../contexts/ThemeContext";

const HomeConfig = (props) => {
  const history = useNavigate();
  const { darkMode } = React.useContext(ThemeContext);

  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const [finishStatus, setfinishStatus] = useState(false);

  // const onBackButtonEvent = (e) => {
  //   // e.preventDefault();
  //   if (!finishStatus) {
  //     if (window.confirm("Do you want to close the app?")) {
  //       window.history.length=0
  //       window.opener=null;
  //       window.open('','_self');
  //       window.close();
  //       setfinishStatus(true);
  //       props.history.push("/");
  //     } else {
    
  //       window.history.pushState(null, null, window.location.pathname);
  //       setfinishStatus(false);
  //       window.close();
  //     }
  //   }
  // };



  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 300);

    
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {HomeData.map((e, i) => {
          return (
            e.name !== "Home" && (
              <>
                <Grow
                  direction="up"
                  in={checked}
                  {...(checked ? { timeout: i * 300 } : {})}
                >
                  <Grid item xs={6} md={6} key={i + e.name}>
                    <Card
                      elevation={2}
                      // sx={{border:!darkMode&&1,borderColor:e.color[600]}}
                      key={i + e.color}
                      variant={darkMode ? "elevation" : "outlined"}
                      className="homecards"
                      onClick={() => history({ pathname: e.link })}
                    >
                      <CardActionArea>
                        <CardHeader
                          sx={{
                            textAlign: matches ? "left" : "center",
                            display: "flex",
                            flexDirection: matches ? "row" : "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          avatar={
                            <Avatar
                              // className="avatarinner"
                              sx={{
                                bgcolor: e.color[100],
                                color: e.color[600],
                                marginRight: matches ? 2 : 0,
                                marginBottom: matches ? 0 : 2,
                              }}
                            >
                              {e.icon}
                            </Avatar>
                          }
                          title={
                            <Typography variant={matches ? "h6" : "caption"}>
                              {matches ? (
                                e.name
                              ) : (
                                <strong style={{ textTransform: "uppercase" }}>
                                  {e.name}
                                </strong>
                              )}
                            </Typography>
                          }
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grow>
              </>
            )
          );
        })}
      </Grid>
    </>
  );
};

export default HomeConfig;
