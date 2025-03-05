import bcrypt from "bcrypt";
import { pool } from "../database";

interface UserInterface {
  email: string;
  username: string;
  password: string;
}

const users: Array<UserInterface> = [
  {
    email: "christian.delmor@gmail.com",
    username: "christian",
    password: "skljf",
  },
];

export const UserFindOneService = (username: string): UserInterface | null => {
  const exist = users.find((user) => user.username === username);

  if (!exist) {
    return null;
  }

  return exist;
};

export const UserFindManyService = (): Array<UserInterface> => {
  return users;
};

export const UserCreateService = async (
  userToCreate: UserInterface,
): Promise<UserInterface | null> => {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(userToCreate.password, saltRounds);

  const client = await pool.connect();

  //ADD CHECK FOR EXISTING USERNAME AND EMAIL!!!
  try {
    const query =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id";
    const values = [userToCreate.username, userToCreate.email, hashedPassword];
    const res = await client.query(query, values);
  } catch (err) {
    console.error("Error while creating user:", err);
  } finally {
    client.release();
  }
  return userToCreate;
};

export const UserUpdateService = (
  payload: UserInterface,
): UserInterface | null => {
  const userIndex = users.findIndex(
    (user) => user.username === payload.username,
  );

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...payload };
  return users[userIndex];
};

export const UserDeleteService = (username: string): boolean => {
  const exists = users.findIndex((user) => user.username === username);

  if (exists === -1) {
    return false;
  }

  users.splice(exists, 1);
  return true;
};
