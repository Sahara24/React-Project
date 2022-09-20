import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { InfoCard } from "./InfoCard";

export const Search = ({ searchArr }) => {
  console.log(searchArr)
  return (
    <>
      {searchArr.length && <Typography variant="h4" mt="1rem" ml="1rem">Matching Results</Typography>}
      <Stack minHeight="86vh" mt="2rem" flexDirection="row" flexWrap="wrap">
        {
          searchArr.length > 0 ?
            searchArr.map((el) => {
              return (
                <Box key={el.id} width="18rem" height="23rem" mb="1rem" sx={{
                  overflow: "hidden",
                  padding: "1rem"
                }}>
                  <InfoCard
                    image={el.image}
                    title={el.title}
                    uniqkey={el.id}
                    price={el.price}
                    rating={el.rating}
                    category={el.category}
                  />
                </Box>
              )
            }) : <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              alignItems: "center"
            }}>
              <Typography variant="h3" sx={{
                color: "#ff2625",
                margin: "2rem"
              }}>No resuls found</Typography>
              <Link to={'/'}><Typography sx={{
                textDecoration: "none"
              }}>🏠</Typography></Link>
            </Box>
        }
      </Stack>
    </>
  )
}
