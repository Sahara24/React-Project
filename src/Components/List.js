import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductCall } from "../Reducers/Actions";
import { InfoCard } from "./InfoCard";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

export const List = () => {
  const inState = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductCall());
  }, []);
  return (
    <>
      <Container>
        <Grid container spacing={5} marginTop="1rem">
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
    </>
  );
};
