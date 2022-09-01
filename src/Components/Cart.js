import React, { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import { Container, Grid, Typography, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import { } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { mytheme } from "./Theme";
import { useSelector } from "react-redux/es/exports";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Reducers/Actions";
import { useNavigate } from "react-router";

const Cart = (props) => {
  let totalPrice = 0;
  const keyRef = useRef();
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.carts.cart);
  console.log(dataState)
  const loginState = useSelector(state => state.login.userDetails);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const handleBuy = (e, id) => {
    if (Object.keys(loginState).length > 0) {
      setCheck(true);
      removeItem();
    } else {
      navigate("/login")
    }
  }

  const removeItem = (e) => {
    console.log(keyRef);
    dispatch(removeFromCart());
  }
  const arr = dataState.map((el) => {
    totalPrice += el.price;
    return (
      <>
        <Grid item key={el.id} sx={{ margin: "4px" }}>
          <ThemeProvider theme={mytheme}>
            <Paper elevation={3} sx={{
              display: "flex",
            }} className="cart-select">
              <Box className>
                <img src={`${el.image}`} alt={`${el.title}`} className="cart-images" />
              </Box>
              <Box className>
                <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                  {el.title}
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: "1rem" }}>
                  <strong>Price: ${el.price}</strong>
                </Typography>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
      </>
    )
  })
  return (
    <>
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
            <Button variant="contained" color="error" ref={keyRef} onClick={(e) => removeItem(e)} size="small" sx={{
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
      {(check && dataState.length >= 0) && <Box sx={{
        dispaly: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Alert severity="success">Your order is on your way, Thank you for shopping with us</Alert>
      </Box>
      }

    </>
  )
}

export default Cart;
