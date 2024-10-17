import { jwtDecode } from "jwt-decode";
import { AuthUser } from "./AuthPage.static";

const useAuthPage = () => {
  const decodeJWT = (jwt: string): AuthUser | null => {
    try {
      const result = jwtDecode<AuthUser>(jwt);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return {
    decodeJWT,
  };
};

export default useAuthPage;
