import { v4 as uuidv4 } from "uuid";

export const formatPrice = (price) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
};

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

export {
  presetsList,
  shopList,
  shopListMobile,
  serviceList,
  navbarCollectionsList,
  navbarPresetsList,
};
