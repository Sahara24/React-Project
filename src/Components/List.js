import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfoCard } from "./InfoCard";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Footer } from "./Footer";
import { fetchProducts } from "../Reducers/Actions";

export const List = () => {
  const [displayArr, setDisplayArr] = useState([]);
  const [filterCheck, setFilterCheck] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  const inState = useSelector((state) => state.allProducts.products);
  const displayAll = () => {
    setFilterCheck(true);
    setDisplayArr(inState);
  }
  const displayMen = () => {
    setFilterCheck(true);
    let tempArr = [];
    tempArr = inState.filter(el => el.category === "men's clothing");
    setDisplayArr(tempArr);
  }
  const displayWomen = () => {
    setFilterCheck(true);
    let tempArr = [];
    tempArr = inState.filter(el => el.category === "women's clothing");
    setDisplayArr(tempArr);
    console.log(filterCheck)
  }
  const displayJewellery = () => {
    setFilterCheck(true);
    let tempArr = [];
    tempArr = inState.filter(el => el.category === "jewelery");
    setDisplayArr(tempArr);
  }
  const displayElectronics = () => {
    setFilterCheck(true);
    let tempArr = [];
    tempArr = inState.filter(el => el.category === "electronics");
    setDisplayArr(tempArr);
  }
  return (
    <>
      <Container id="container">
        <Typography variant="h3" sx={{
          textAlign: "center",
          margin: "1rem 1rem 0.4rem",
        }}>Available Products</Typography>
        <hr className="separator" />
        <span className="filter-select">Select Category</span>
        <div className="button-wrapper">
          <Button variant="contained" size="small" onClick={displayAll}>ALL</Button>
          <Button variant="contained" size="small" onClick={displayMen}>MEN</Button>
          <Button variant="contained" size="small" onClick={displayWomen}>WOMEN</Button>
          <Button variant="contained" size="small" onClick={displayJewellery}>JEWELLERY</Button>
          <Button variant="contained" size="small" onClick={displayElectronics}>ELECTRONICS</Button>
        </div>
        <Grid container spacing={5} marginTop="3px" marginBottom="3px">
          {filterCheck ?
            displayArr.map((el) => {
              return (
                <Fragment key={el.id}>
                  <InfoCard
                    image={el.image}
                    title={el.title}
                    uniqkey={el.id}
                    price={el.price}
                    rating={el.rating}
                    category={el.category}
                  />
                </Fragment>
              )
            }) :
            inState.map((el) => {
              return (
                <Fragment key={el.id}>
                  <InfoCard
                    image={el.image}
                    title={el.title}
                    uniqkey={el.id}
                    price={el.price}
                    rating={el.rating}
                    category={el.category}
                  />
                </Fragment>

              );
            })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
