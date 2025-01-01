interface UserInterface {
  username: string;
  password: string;
}

const users: Array<UserInterface> = [
  { username: "christian", password: "skljf" },
  { username: "joao", password: "sfgsfg" },
  { username: "maria", password: "ghfdhfg" },
];

export const userFindOneService = (username: string): UserInterface | null => {
  const exist = users.find((user) => user.username === username);

  if (!exist) {
    return null;
  }

  return exist;
};

export const userFindManyService = (): Array<UserInterface> => {
  return users;
};

export const userCreateService = (
  userToCreate: UserInterface
): UserInterface | null => {
  const exist = users.find((user) => user.username === userToCreate.username);

  if (exist) {
    return null;
  }

  users.push(userToCreate);

  return userToCreate;
};
