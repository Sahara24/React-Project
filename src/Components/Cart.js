import React, { Fragment, useState } from "react";
import Paper from "@mui/material/Paper";
import { Container, Grid, Typography, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import { } from "@mui/icons-material";
import { ThemeProvider, Snackbar } from "@mui/material";
import { mytheme } from "./Theme";
import { useSelector } from "react-redux/es/exports";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { removeFromCart, removeOneItem } from "../Reducers/Actions";
import { useNavigate } from "react-router";

const Cart = (props) => {
  let totalPrice = 0;
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.carts.cart);
  const loginState = useSelector(state => state.login.userDetails);
  const navigate = useNavigate();
  const [one, setOne] = useState(false);
  const [check, setCheck] = useState(false);
  const handleBuy = (e, id) => {
    if (Object.keys(loginState).length > 0) {
      setCheck(true);
      removeItem();
    } else {
      navigate("/login")
    }
  }

  const handleBuyOne = (e) => {
    if (Object.keys(loginState).length > 0) {
      setOne(true);
      handleRemove(e);
    } else {
      navigate("/login")
    }
  }

  const handleRemove = (e) => {
    const prodId = e.currentTarget.parentElement.id;
    dispatch(removeOneItem(prodId));
  }

  const removeItem = (e) => {
    dispatch(removeFromCart());
  }

  const handleClose = () => {
    setOne(false);
  }

  const arr = dataState.map((el) => {
    totalPrice += el.price;
    return (
      <Fragment key={el.id}>
        <Grid item sx={{ margin: "4px" }}>
          <ThemeProvider theme={mytheme}>
            <Paper elevation={3} className="cart-select">
              <Box className="cart-img-container">
                <img src={`${el.image}`} alt={`${el.title}`} className="cart-images" />
              </Box>
              <Box id={el.id} className="Prod-info">
                <Box>
                  <Typography variant="h6" sx={{ marginLeft: "1rem" }} className="cart-title">
                    {el.title}
                  </Typography>
                  <Typography variant="body1" sx={{ marginLeft: "1rem" }} className="cart-desc">
                    <strong>Price: <span className="prices">${el.price}</span></strong>
                  </Typography>
                </Box>
                <Button size="small" onClick={(e) => handleBuyOne(e)} id="buyOnebtn">BUY</Button>
                <Button color="warning" size="small" onClick={(e) => handleRemove(e)} id="removeOnebtn">Remove</Button>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
      </Fragment>
    )
  })
  return (
    <>
      {(check && dataState.length >= 0) && <Box sx={{
        dispaly: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Alert severity="success">Your order is on your way, Thank you for shopping with us</Alert>
      </Box>
      }
      {
        (dataState.length > 0) && <Container sx={{
          marginTop: "1rem"
        }}>
          {arr}
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Typography variant="h6" color="green">Total Amount: ${totalPrice.toFixed(2)}</Typography>
          </Box>
          <Box className="button-container" sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0"
          }}>
            <Button variant="contained" onClick={(e) => handleBuy(e)} size="small" sx={{
              margin: "1rem"
            }}
            >
              BUY ALL
            </Button>
            <Button variant="contained" color="error" onClick={(e) => removeItem(e)} size="small" sx={{
              marginTop: "1rem",
              marginBottom: "1rem"
            }}>
              EMPTY CART
            </Button>
          </Box>
        </Container>
      }
      {
        (dataState.length === 0) && <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Typography variant="h5" align="center" sx={{
            marginTop: "1.7rem"
          }}>Your cart is empty</Typography>
          <img src="https://cdn.dribbble.com/users/721524/screenshots/4112199/media/ab1a209f355ad77379f7c4e1326b0d96.png" alt="Empty cart" height="48%" width="45%" />

          <Button variant="contained" size="small" onClick={() => navigate('/')} color="success" sx={{
            margin: "1rem"
          }}>SHOP NOW</Button>
          {/* {check && <Alert severity="success">Order Placed. Thank you</Alert>} */}
        </Box>
      }
      {
        one && <Snackbar
          autoHideDuration={1500}
          open={one}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}>
          <Alert variant="filled" severity="success" onClose={handleClose}>
            Order Placed
          </Alert>
        </Snackbar>
      }


    </>
  )
}

export default Cart;
