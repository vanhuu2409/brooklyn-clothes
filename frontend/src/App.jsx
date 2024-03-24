import AppRouter from "./appRouter/AppRouter";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const item = {
  //   id: uuidv4(),
  //   name: "",
  //   category: "hoodies",
  //   description: "",
  //   details: ["", "", "", "", "", "", ""],
  //   // href: "productid1",
  //   quantity: 1,
  //   price: "₫",
  //   salePrice: "",
  //   status: "sale",
  //   rating: 3.9,
  //   reviewCount: 117,
  //   imageSrcs: ["", "", "", ""], // === 4
  //   imageSrc: "",
  //   imageAlt: "",
  //   colors: [
  //     {
  //       name: "",
  //       class: "bg-[#]",
  //       inStock: true,
  //     },
  //     {
  //       name: "Black",
  //       class: "bg-[#1D1C21]",
  //       inStock: true,
  //     },
  //   ],
  //   sizes: [
  //     { name: "XS", inStock: false },
  //     { name: "S", inStock: true },
  //     { name: "M", inStock: true },
  //     { name: "L", inStock: true },
  //     { name: "XL", inStock: true },
  //     { name: "XXL", inStock: false },
  //   ],
  // };
  return <AppRouter />;
}

export default App;
