export type Product = {
  id?: string; //optional because it's automatically incremented by postgres
  name: string;
  price: number;
};
