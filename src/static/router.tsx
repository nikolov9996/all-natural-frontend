import { RouterProvider } from "react-router-dom";
import { router } from "./routes.static";

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
