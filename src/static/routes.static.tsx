import { createBrowserRouter } from "react-router-dom";
import Home from "~/components/Home";
import ProductDetails from "~/components/ProductDetails/ProductDetails";
import Profile from "~/components/Profile/Profile";
import { ROUTES } from "./contants";
import { ReactNode } from "react";
import Layout from "~/components/Layout/Layout";

type LayoutProps = {
  component: ReactNode;
};

const WithLayout: React.FC<LayoutProps> = ({ component }) => (
  <Layout>{component}</Layout>
);

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <WithLayout component={<Home />} />,
  },
  {
    path: ROUTES.PRODUCT_DETAILS,
    element: <WithLayout component={<ProductDetails />} />,
  },
  {
    path: ROUTES.PROFILE,
    element: <WithLayout component={<Profile />} />,
  },
]);
