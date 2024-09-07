import { ReactNode } from "react";
import Layout from "~/features/Layout";

type LayoutProps = {
  component: ReactNode;
};

export const WithLayout: React.FC<LayoutProps> = ({ component }) => (
    <Layout>{component}</Layout>
  );