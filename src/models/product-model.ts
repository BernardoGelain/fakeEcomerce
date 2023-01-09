export type Product = {
  price: number;
  title: string;
  category: string;
  id: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
