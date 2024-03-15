import React from "react";
import ButtonBase from "../Common/Button/Button";
import { useGetProducts } from "~/services/hooks";
import ProductCard from "../Common/ProductCard/ProductCard";

import { Grid, Skeleton, useTheme, useMediaQuery } from "@mui/material";
import { ProductType } from "~/static/types";

const Home: React.FC = () => {
  const { data, isLoading,error } = useGetProducts().useGetManyProducts(10);
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.only("xs"));

  if (isLoading) {
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
    // TODO: Add skeleton here
  }

  return (
    <>{error?.stack}
      <Grid container spacing={isSmall ? 1 : 3} p={1}>
        {data?.Products.map((prod: ProductType) => {
          return (
            <Grid md={3} sm={4} xs={6} lg={2} xl={2} item key={prod._id}>
              <ProductCard product={prod} />
            </Grid>
          );
        })}
      </Grid>
      <ButtonBase title="button" />
    </>
  );
};

export default Home;
