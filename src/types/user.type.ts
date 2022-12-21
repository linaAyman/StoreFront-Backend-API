export type User = {
  id?: string; //optional because it's automatically incremented by postgres
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
