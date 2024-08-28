import { MainGridBox } from "./Layout.styles";
import NavBar from "./NavBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainGridBox container flexDirection="column">
      <NavBar />
      {children}
    </MainGridBox>
  );
};

export default Layout;
