interface UserInterface {
  username: string;
  password: string;
}

export const userCreateService = (): Array<UserInterface> => {
  return [
    {
      username: "christian",
      password: "saldjhas",
    },
  ];
};
