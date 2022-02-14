import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import HomeData from "./HomeData";


const HomeConfig = () => {
  const history = useNavigate();
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));




  return (
    <>
   
        <Grid container spacing={3} >
          {HomeData.map((e, i) => {
            return (
              e.name !== "Home" && (
                <>
                  <Grid item xs={12} md={6} key={i + e.name}>
                    <Card
                      key={i + e.color}
                      variant="outlined"
                      className="homecards"
                      onClick={() => history({ pathname: e.link })}
                    >
                      <CardActionArea>
                        <CardHeader
                          avatar={
                            <Avatar
                              className="avatarinner"
                              sx={{ bgcolor: e.color[100],color:e.color[600] }}
                            
                            >
                              {e.icon}
                            </Avatar>
                          }
                          title={<Typography variant={matches?"h6":'button'}>{e.name}</Typography>}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>
              )
            );
          })}
        </Grid>
    
    </>
  );
};

export default HomeConfig;
