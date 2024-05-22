import { createBrowserRouter } from "react-router-dom";
import Home from "~/features/Home";
import ProductDetails from "~/features/ProductDetails/ProductDetails";
import Profile from "~/features/Profile/Profile";
import { ROUTES } from "./contants";
import { ReactNode } from "react";
import Layout from "~/features/Layout/Layout";
import Sensor from "~/features/Sensor/Sensor";

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
  {
    path: ROUTES.SENSOR,
    element: <WithLayout component={<Sensor />} />,
  },
]);
