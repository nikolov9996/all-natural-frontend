import { createBrowserRouter } from "react-router-dom";
import Home from "~/features/Home";
import ProductDetails from "~/features/ProductDetails";
import Profile from "~/features/Profile";
import { ROUTES } from "./contants";
import Sensor from "~/features/Sensor/Sensor";
import Messages from "~/features/Messages";
import { WithLayout } from "~/features/Layout/WithLayout";
import AuthPage from "~/features/Auth";

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
  {
    path: ROUTES.MESSAGES,
    element: <WithLayout component={<Messages />} />,
  },
  {
    path: ROUTES.AUTH_PAGE,
    element: <AuthPage />,
  },
]);
