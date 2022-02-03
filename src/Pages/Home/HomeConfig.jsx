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
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import HomeData from './HomeData';

const HomeConfig = () => {
  const history = useNavigate()
  const [hover,setHover]=useState(false)
  return (
    <>
      <Container sx={{ marginTop: 3 }}>
        <Grid container spacing={3}>
          {HomeData.map((e, i) => {
            return (
              <>
                <Grid item xs={12} md={6} key={i + e.name}>
                  <Card key={i + e.color} variant='outlined'  className='homecards' onClick={()=>history({pathname : e.link})}  >
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar className="avatarinner" sx={{ bgcolor: e.color[600] }} aria-label="recipe">
                            {e.icon}
                          </Avatar>
                        }
                        title={<Typography variant="h6">{e.name}</Typography>}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default HomeConfig;
