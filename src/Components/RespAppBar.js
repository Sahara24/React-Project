import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from "react-redux/es/hooks/useSelector";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signOut } from "../Reducers/Actions";
import LogoutIcon from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Stack, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function RespAppBar({ setSearchArr }) {
  const nav = useNavigate();
  const [search, setSearch] = React.useState("");

  const handleClick = async () => {
    if (search) {
      const res = await fetch('https://fakestoreapi.com/products');
      const resData = await res.json();
      const searchedData = resData.filter((item) => item.category.toLowerCase().includes(search)
        || item.description.toLowerCase().includes(search)
        || item.title.toLowerCase().includes(search)
      )
      setSearchArr(searchedData);
      nav('/search');
      console.log(searchedData);
      setSearch("");
    }
  }

  const loginState = useSelector(state => state.login.userDetails);
  const isLogged = Object.keys(loginState).length > 0;
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.carts.cart);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    isLogged ? dispatch(signOut()) : navigate('/login');
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => navigate("/cart")}>
        <IconButton size="large" aria-label="Items in cart" color="inherit" >
          <Badge badgeContent={dataState.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {isLogged ? <LogoutIcon /> : <LockOpenIcon />}
        </IconButton>
        <p>{isLogged ? "Logout" : "Login"}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundColor: "rgb(43, 34, 69)",
        color: "white",
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            E-SHOP
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Stack direction='row' alignItems='center' mr="10px">
            <TextField size="small"
              placeholder="search products"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              InputProps={{ style: { fontWeight: 500 } }}
              sx={{
                width: '11rem',
                backgroundColor: "rgb(245,245,245)",
                borderRadius: "7px",
              }} />
            <Search onClick={handleClick} />
          </Stack>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="Items in cart" color="inherit" onClick={() => navigate('/cart')}>
              <Badge badgeContent={dataState.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {isLogged ? <LogoutIcon /> : <LockOpenIcon />}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
