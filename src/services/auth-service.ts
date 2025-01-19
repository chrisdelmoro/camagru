import jwt from "jsonwebtoken";

export const generateAccessToken = (username: string): string => {
  const payload = {
    username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "30m",
  });

  return token;
};
