import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { InfoCard } from "./InfoCard";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import StickyFooter from "./SFooter";

export const List = () => {
  const inState = useSelector((state) => state.allProducts.products);
  return (
    <>
      <Container>
        <Grid container spacing={5} marginTop="3px" marginBottom="3px">
          {inState.map((el) => {
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
      <StickyFooter />
    </>
  );
};
