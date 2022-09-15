import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React from "react";
import { NavLink } from "react-router-dom";
import { List } from "./List";

export const Home = () => {
  return (
    <>
      <div className="main-div" >
        <h1 className="shopTitle">E-Shop</h1>
        <div className="ad-div">
          <h2>
            Look better and live better.
          </h2>
          <h4> Check out our latest <NavLink to={'/products'} className="nav-btn">Products</NavLink></h4>
        </div>
        <div>
          <a className='arrLink' href='#container' title='view products'><KeyboardDoubleArrowDownIcon className='arrow' sx={{
            fontSize: 60,
          }} /></a>
        </div>
      </div>
      <List />
    </>
  )
}