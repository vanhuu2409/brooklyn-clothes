export const formatPrice = (price) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "₫";
};

// debounce request
export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
};

export const RandomProducts = (products, quantity = 4) => {
  const randomProducts = [];
  const length = products.length;
  for (let i = 0; i < quantity; i++) {
    const randomNum = Math.floor(Math.random() * length);
    if (randomProducts[i]?.name !== products[i]?.name) {
      randomProducts.push(products[randomNum]);
    }
  }
  return randomProducts;
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

const shopListMobile = ["Shop all", "Lookbook", "Tops", "Bottoms", "Other"];

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
    id: 1,
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000",
    title: "Everyday essentials",
  },
  {
    id: 2,
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1.jpg?v=1690201723&width=3000",
    title: "Carefree classics",
  },
  {
    id: 3,
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_1_db7ff59a-61a0-4dda-9306-8923eec52061.jpg?v=1685687628&width=3000",
    title: "mellow outfits",
  },
];
// presets
const navbarPresetsList = [
  {
    id: 1,
    href: "/",
    imgUrl:
      "https://berlin-lifestyle.myshopify.com/cdn/shop/collections/Rectangle_237_2.jpg?v=1685687663&width=3000",
    title: "Limited Collection",
  },
  {
    id: 2,
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
