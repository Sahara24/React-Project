import React from "react";
import Paper from "@mui/material/Paper";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { ThemeProvider } from "@mui/material";
import { mytheme } from "./Theme";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router";
import Button from '@mui/material/Button';


const SelectCard = () => {

  const params = useParams();
  console.log(params.id);
  const dataState = useSelector(state => state.allProducts.products[params.id - 1]);
  console.log(dataState)
  return (
    <>
      <Container sx={{
        marginTop: "1rem"
      }}>
        <Grid item key={dataState.uniqkey} >
          <ThemeProvider theme={mytheme}>
            <Paper elevation={1} sx={{
              display: "flex",
            }} className="paper-select">
              <Box className="select-img-container">
                <img src={`${dataState.image}`} alt={`${dataState.title}`} className="select-images" />
              </Box>
              <Box className="select-info-container">
                <Typography variant="h6">
                  {dataState.title}
                </Typography>
                <Box
                  paddingX={0.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="read-only"
                    value={dataState.rating.rate}
                    precision={0.25}
                    size="small"
                    readOnly
                  />
                  <Typography variant="body3" component="p" marginLeft={0.5}>
                    {dataState.rating.rate}
                  </Typography>
                  <Typography variant="body3" component="p" marginLeft={0.5}>
                    ({dataState.rating.count} reviews)
                  </Typography>
                </Box>
                <Box sx={{ paddingLeft: "4px" }} paddingX={1}>
                  <Typography variant="h6" component="h3">
                    ${dataState.price}
                  </Typography>
                </Box>
                <Box sx={{
                  marginTop: "0.7rem",
                  marginLeft: "0.7rem",
                  marginRight: "0.7rem"
                }}>
                  <Typography variant="body2" className="description">
                    {dataState.description}
                  </Typography>
                </Box>
                <Box>
                  <Button variant="contained" color="success" size="small" sx={{
                    margin: "1rem"

                  }}>
                    BUY
                  </Button>
                  <Button variant="outlined" color="secondary" size="small" sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem"
                  }}>
                    ADD TO CART
                  </Button>
                </Box>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
      </Container>

    </>
  )
}

export default SelectCard;

