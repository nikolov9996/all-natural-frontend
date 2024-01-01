import { Grid } from "@mui/material";
import ImageSlider from "./ImageSlider/ImageSlider";
import ProductInfo from "./ProductInfo/ProductInfo";

const product = {
  _id: "6579ebbe03f2a8c8fbfd0ad9",
  name: "Tomatoes",
  tags: ["Test", "NestJS"],
  description: "This is a test product for NestJS DTO.",
  photos: [
    "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/vqcolsypaovjkbtj7hpx.jpg",
    "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/n13paavpltdc1wsxxflp.jpg",
    "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/gmkysq7wji1uivilanmn.jpg",
    "https://res.cloudinary.com/dky3tezac/image/upload/v1703168226/riywvyq4i8bfqrcqqi8i.jpg",
  ],
  creator: {
    _id: "656f2c5af529e37b17c39b2e",
    username: "user 1",
    email: "pedal5@eample.com",
    avatar: "aaaaavatar batko",
    favorites: [],
    comments: [],
    isSeller: true,
    password: "this must be encrypted",
    createdAt: "2023-12-05T13:57:46.236Z",
    updatedAt: "2023-12-05T13:58:31.194Z",
    __v: 1,
  },
  certificates: ["Test Certificate"],
  isNatural: true,
  price: 19.99,
  stock: "In Stock",
  favorites: [],
  comments: [],
  category: "FRUIT",
  rating: [],
  createdAt: "2023-12-13T17:37:02.485Z",
  updatedAt: "2023-12-21T14:35:44.131Z",
  __v: 0,
};

const ProductDetails: React.FC = () => {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={6} lg={8} xl={8} item>
        <ImageSlider {...product} />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={4} xl={4} item>
        <ProductInfo {...product} />
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
        map
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
