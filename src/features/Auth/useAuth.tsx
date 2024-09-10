import bcrypt from "bcryptjs";
import { SALT_ROUNDS } from "~/app/constants";

const useAuth = () => {
  async function encryptPassword(password: string): Promise<string | Error> {
    return await new Promise((resolve, reject) => {
      bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
        if (err) {
          reject(err);
        }
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    });
  }
  return {
    encryptPassword,
  };
};

export default useAuth;
