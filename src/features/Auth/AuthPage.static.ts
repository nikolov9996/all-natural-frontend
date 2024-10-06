export type AuthUser = {
  username: string;
  email: string;
  avatar?: string;
  isSeller: boolean;
  userId: string;
  iat?: number;
  exp?: number;
};
