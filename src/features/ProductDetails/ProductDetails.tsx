import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ImageSlider from "./ImageSlider/ImageSlider";
import ProductInfo from "./ProductInfo/ProductInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentsIcon from "@mui/icons-material/ThreeP";
import { useParams } from "react-router-dom";
import useProductDetails from "./ProductDetails.logic";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProductDetails({ id: id || "" });

  if (!id) {
    return <p>not found</p>;
    // TODO add not found page
  }
  if (error) {
    return <p>Error</p>;
    // TODO add error page or not found
  }

  if (isLoading || !product) {
    return <p>Loading...</p>;
    // TODO add loading page
  }

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={6} lg={4} xl={4} item>
        <ImageSlider {...product} />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={8} xl={8} item>
        <ProductInfo {...product} />
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
        map
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
        everything else will be here under the map
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Comments <CommentsIcon />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Comments will be here</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
