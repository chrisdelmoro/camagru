interface UserInterface {
  username: string;
  password: string;
}

const users: Array<UserInterface> = [
  { username: "christian", password: "skljf" },
  { username: "joao", password: "sfgsfg" },
  { username: "maria", password: "ghfdhfg" },
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

export const UserCreateService = (
  userToCreate: UserInterface
): UserInterface | null => {
  const exist = users.find((user) => user.username === userToCreate.username);

  if (exist) {
    return null;
  }

  users.push(userToCreate);

  return userToCreate;
};

export const UserUpdateService = (
  payload: UserInterface
): UserInterface | null => {
  const userIndex = users.findIndex(
    (user) => user.username === payload.username
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
