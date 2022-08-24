import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {} from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { ThemeProvider } from "@mui/material";
import { mytheme } from "./Theme";

export const InfoCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={props.uniqkey}>
      <ThemeProvider theme={mytheme}>
        <Paper elevation={3}>
          <img src={`${props.image}`} alt={`${props.title}`} className="imgg" />
          <Box paddingX={1}>
            <Typography variant="body1">
              {props.title.slice(0, 25)}...
            </Typography>
          </Box>
          <Box
            paddingX={0.5}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="read-only"
              value={props.rating.rate}
              precision={0.25}
              size="small"
              readOnly
            />
            <Typography variant="body3" component="p" marginLeft={0.5}>
              {props.rating.rate}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={0.5}>
              ({props.rating.count} reviews)
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "4px" }} paddingX={1}>
            <Typography variant="h6" component="h3">
              ${props.price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};
