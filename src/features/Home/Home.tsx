import React from "react";
import ProductCard from "../Common/ProductCard/ProductCard";

import { Grid, Skeleton, useTheme, useMediaQuery } from "@mui/material";
import { ProductType } from "~/static/types";
import { useGetProductsQuery } from "~/services/productsSlice";

const Home: React.FC = () => {
  const { isLoading, data } = useGetProductsQuery("10");
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.only("xs"));
  const isLarge = useMediaQuery(theme.breakpoints.only("lg"));

  if (isLoading) {
    // loading here
    return (
      <Grid container spacing={1}>
        {Array(20)
          .fill(1)
          .map((_, i) => {
            return (
              <Grid item key={i} md={3} sm={4} xs={6} lg={3} xl={2}>
                <Skeleton width={"auto"} height={300} />
              </Grid>
            );
          })}
      </Grid>
    );
  }

  return (
    <>
      <Grid
        container
        spacing={isSmall ? 1 : 3}
        pl={isLarge ? 0 : 1}
        pr={isLarge ? 0 : 1}
        pt={1}
      >
        {data?.Products.map((prod: ProductType) => {
          return (
            <Grid md={3} sm={4} xs={6} lg={2} xl={2} item key={prod._id}>
              <ProductCard product={prod} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
