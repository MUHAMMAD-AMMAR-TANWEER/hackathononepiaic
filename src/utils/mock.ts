import { Product } from "./types";
// import Image from "next/image";
import product1 from "/public/product1.png";
import product2 from "/public/product2.png";
import product3 from "/public/product3.png";
import product4 from "/public/promote1.webp";

export const Products: Product[] = [
  {
    id: 1,
    tagline: "Dress",
    name: "Product One",
    price: 200,
    category: "male",
    image: product1,
  },
  {
    id: 2,
    tagline: "Dress Ace",
    name: "Product Two",
    price: 300,
    category: "female",
    image: product2,
  },
  {
    id: 3,
    tagline: "Dress Club",
    name: "Product Three",
    price: 400,
    category: "female",
    image: product3,
  },
  {
    id: 4,
    tagline: "Dress Diamond",
    name: "Product Four",
    price: 504,
    category: "kids",
    image: product4,
  },
];
