import { createBrowserRouter } from "react-router-dom";
import Home from "~/components/Home";
import ProductDetails from "~/components/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);
