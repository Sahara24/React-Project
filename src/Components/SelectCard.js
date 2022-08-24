// import React, { useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import { Container, Grid, Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import { } from "@mui/icons-material";
// import Rating from "@mui/material/Rating";
// import { ThemeProvider } from "@mui/material";
// import { mytheme } from "./Theme";
// import { useSelector } from "react-redux/es/exports";
// import { useParams } from "react-router"


// const SelectCard = () => {

//   const params = useParams();
//   console.log(params.id);
//   const dataState = useSelector(state => state.allProducts.products[params.id - 1]);
//   console.log(dataState)
//   return (
//     <>
//       <Container >
//         <Grid item key={dataState.uniqkey} xs={12} sm={6} md={4} lg={3}>
//           <ThemeProvider theme={mytheme}>
//             <Paper elevation={3}>
//               <Box className="select-container">
//                 <img src={`${dataState.image}`} alt={`${dataState.title}`} className="select-img" />
//               </Box>
//               <Box paddingX={1}>
//                 <Typography variant="body1">
//                   {dataState.title}
//                 </Typography>
//               </Box>
//               <Box
//                 paddingX={0.5}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <Rating
//                   name="read-only"
//                   value={dataState.rating.rate}
//                   precision={0.25}
//                   size="small"
//                   readOnly
//                 />
//                 <Typography variant="body3" component="p" marginLeft={0.5}>
//                   {dataState.rating.rate}
//                 </Typography>
//                 <Typography variant="body3" component="p" marginLeft={0.5}>
//                   ({dataState.rating.count} reviews)
//                 </Typography>
//               </Box>
//               <Box sx={{ paddingLeft: "4px" }} paddingX={1}>
//                 <Typography variant="h6" component="h3">
//                   ${dataState.price}
//                 </Typography>
//               </Box>
//               <Box sx={{
//                 marginTop: "0.7rem",
//                 marginLeft: "0.7rem",
//                 marginRight: "0.7rem"
//               }}>
//                 <Typography variant="body2" >
//                   {dataState.description}
//                 </Typography>
//               </Box>
//             </Paper>
//           </ThemeProvider>
//         </Grid>
//       </Container>

//     </>
//   )
// }

// export default SelectCard;


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router"
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const params = useParams();
  console.log(params.id);
  const dataState = useSelector(state => state.allProducts.products[params.id - 1]);
  console.log(dataState)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <Card sx={{ maxWidth: 700 }}>
        <Box sx={{
          padding: "0.8rem"
        }}>
          <CardMedia
            component="img"
            width="100%"
            height=""
            image={`${dataState.image}`}
            alt={`${dataState.title}`}
          />
        </Box>
        <CardHeader title={<Typography variant="h6" color="text.primary">
          {dataState.title}
        </Typography>} />

        <CardActions disableSpacing>
          <IconButton aria-label="buy-now">
            <Button variant="contained">BUY</Button>
          </IconButton>
          <IconButton aria-label="add-to-cart">

            <Button variant="contained"><AddShoppingCartIcon /></Button>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>
              {dataState.description}
            </Typography>

          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}


