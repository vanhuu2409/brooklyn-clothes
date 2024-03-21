import { v4 as uuidv4 } from "uuid";

// shop list
const shopList = [
  "Shop All",
  "Sale",
  "Basic Collection",
  "Limited Collection",
  "Streetstyle Collection",
  "Lookbook",
];

const shopListMobile = ["Shop all", "Lookbook", "Tops", "Bottoms", "Headwears"];

// footer service list
const serviceList = [
  "Privacy Policy",
  "Shipping Policy",
  "Return Policy",
  "Terms of Service",
];

// collections

const navbarCollectionsList = [
  {
    id: uuidv4(),
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000",
    title: "Everyday essentials",
  },
  {
    id: uuidv4(),
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1.jpg?v=1690201723&width=3000",
    title: "Carefree classics",
  },
  {
    id: uuidv4(),
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1_db7ff59a-61a0-4dda-9306-8923eec52061.jpg?v=1685687628&width=3000",
    title: "mellow outfits",
  },
];
// presets
const navbarPresetsList = [
  {
    id: uuidv4(),
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000",
    title: "Limited Collection",
  },
  {
    id: uuidv4(),
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1.jpg?v=1690201723&width=3000",
    title: "DISCOUNT ON 100+ ITEMS",
  },
];
const presetsList = ["Lifestyle", "North", "Essential", "Marble", "Resonance"];

// products
const products = [
  {
    id: uuidv4(),
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    salePrice: "$39.99",
    status: "sale",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
    rating: 3.9,
    reviewCount: 117,
    imageSrc:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle223_1.jpg?v=1685012046&width=550",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: uuidv4(),
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    salePrice: "$39.99",
    status: "sale",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
    rating: 3.9,
    reviewCount: 117,
    imageSrc:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle224.jpg?v=1685012185&width=550",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: uuidv4(),
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    salePrice: "$39.99",
    status: "sale",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
    rating: 3.9,
    reviewCount: 117,
    imageSrc:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle222_20.jpg?v=1685012326&width=550",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: uuidv4(),
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    salePrice: "$39.99",
    status: "sale",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
    rating: 3.9,
    reviewCount: 117,
    imageSrc:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/files/Rectangle222_20.jpg?v=1685012326&width=550",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];

export {
  presetsList,
  shopList,
  shopListMobile,
  serviceList,
  navbarCollectionsList,
  navbarPresetsList,
  products,
};
