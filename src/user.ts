export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
  initials: string;
};

export const defaultUser = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  email: "john.doe@htn.com",
  password: "htn",
  initials: "JD",
};
