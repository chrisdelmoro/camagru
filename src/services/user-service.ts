interface UserInterface {
  username: string;
  password: string;
}

const users: Array<UserInterface> = [
  { username: "christian", password: "skljf" },
  { username: "joao", password: "sfgsfg" },
  { username: "maria", password: "ghfdhfg" },
];

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
