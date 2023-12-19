import { Grid } from "@mui/material";

const ProductDetails: React.FC = () => {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
        image slider
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
        info
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
        map
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
