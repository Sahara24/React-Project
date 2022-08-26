import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductCall } from "../Reducers/Actions";
import { InfoCard } from "./InfoCard";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import StickyFooter from "./SFooter";

export const List = () => {
  const inState = useSelector((state) => state.allProducts.products);
  // console.log(inState);
  return (
    <>
      <Container>
        <Grid container spacing={5} marginTop="3px" marginBottom="3px">
          {inState.map((el) => {
            return (
              <InfoCard
                image={el.image}
                title={el.title}
                uniqkey={el.id}
                price={el.price}
                rating={el.rating}
                category={el.category}
              />
            );
          })}
        </Grid>
      </Container>
      <StickyFooter />
    </>
  );
};
