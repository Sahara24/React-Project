import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Alert, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { ThemeProvider } from "@mui/material";
import { mytheme } from "./Theme";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AddToCart } from "../Reducers/Actions";
import { AlertTitle, Snackbar } from "@mui/material";



const SelectCard = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [dataState, setDataState] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDataState(data);
        console.log(data);
      })
    return () => {
      setDataState({});
    }
  }, [params.id])

  const selector = useSelector(state => state.allProducts.products)
  const cartState = useSelector(state => state.carts.cart);
  const dispatch = useDispatch(AddToCart())
  const navigate = useNavigate();

  const loginState = useSelector(state => state.login.userDetails);

  const [check, setCheck] = useState(false);

  const handleBuy = (e) => {
    if (Object.keys(loginState).length > 0) {
      setCheck(true);
    } else {
      navigate("/login")
    }
  }

  const handleCart = () => {
    if (cartState.includes(selector[params.id - 1])) {
      setOpen1(true);
      return;
    } else {
      dispatch(AddToCart(selector[params.id - 1]));
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
  }

  return (
    <>
      {
        Object.keys(dataState).length > 0 ?
          <Container sx={{
            marginTop: "1rem",
            minHeight: "90vh",
          }}>
            {!check &&
              <Grid item key={dataState.uniqkey} >
                <ThemeProvider theme={mytheme}>
                  <Paper elevation={1} sx={{
                    display: "flex",
                  }} className="paper-select">
                    <Box className="select-img-container">
                      <img src={dataState.image} alt={dataState.title} className="select-images" />
                    </Box>
                    <Box className="select-info-container">
                      <Typography variant="h6" sx={{ paddingLeft: "0.5rem" }}>
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
                        <Typography variant="h6" component="h3" sx={{
                          paddingLeft: "0.5rem",
                        }}>
                          ${dataState.price}
                        </Typography>
                      </Box>
                      <Box sx={{
                        marginTop: "0.7rem",
                        marginLeft: "0.7rem",
                        marginRight: "0.7rem"
                      }}>
                        <Typography variant="body2" className="description" sx={{
                          paddingLeft: "0.5rem",
                        }}>
                          {dataState.description}
                        </Typography>
                      </Box>
                      <Box>
                        <Button variant="contained" color="success" onClick={() => handleBuy()} size="small" sx={{
                          margin: "1rem"
                        }}>
                          BUY
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => handleCart()} size="small" sx={{
                          marginTop: "1rem",
                          marginBottom: "1rem"
                        }}>
                          ADD TO CART
                        </Button>
                        <Snackbar
                          autoHideDuration={2000}
                          open={open}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                        >
                          <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                            Added to cart
                          </Alert>
                        </Snackbar>
                        <Snackbar
                          autoHideDuration={3000}
                          open={open1}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}>
                          <Alert variant="filled" severity="warning">
                            Item already added in the cart
                          </Alert>
                        </Snackbar>
                      </Box>
                    </Box>
                  </Paper>
                </ThemeProvider>
              </Grid>}
            <Box sx={{
              margin: "3rem"
            }}>
              {check && <Alert severity="success">
                <AlertTitle>Order Placed.</AlertTitle>
                You will receive your order soon. <strong onClick={() => navigate("/")} className="str">
                  {"Continue Shopping"}
                </strong>
              </Alert>}
            </Box>
          </Container>
          :
          <Box sx={{
            minHeight: "99vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5rem"
          }}>
            <div className="ring">Loading
              <span className="loadSpan"></span>
            </div>
          </Box>
      }
    </>
  )
}

export default SelectCard;

