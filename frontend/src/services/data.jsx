import { v4 as uuidv4 } from "uuid";

// products
const products = [
  // shorts
  {
    id: uuidv4(),
    name: "Cargo Shorts",
    category: "shorts",
    description:
      "The summer extension of our classic cargo pants, these shorts have great function and fashion featuring the side cargo pockets as well as a built in climbing inspired release buckle belt.",
    details: [
      "Elastic waistband with integrated belt & release buckle",
      "Classic cargo pockets, snap button closure",
      "Standardized 7.5” inseam",
      "TAIKAN flag side label",
      "97% cotton 3% spandex",
    ],
    // href: "productid1",
    quantity: 1,
    price: "2.527.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TS0006_TAN-4.jpg?v=1677262326&width=1080",
      "https://www.taikaneverything.com/cdn/shop/products/TS0006_OLV-2.jpg?v=1677262326&width=1080",
      "https://www.taikaneverything.com/cdn/shop/products/TS0006_BLK-1.jpg?v=1676505206&width=1080",
      "https://www.taikaneverything.com/cdn/shop/products/TS0006_OLV-5.jpg?v=1676505206&width=1080",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TS0006_TAN-4.jpg?v=1677262326&width=1080",
    imageAlt: "Cargo Shorts",
    colors: [
      {
        name: "Tan",
        class: "bg-[#C4A271]",
        inStock: true,
      },
      {
        name: "Oliver",
        class: "bg-[#7F793F]",
        inStock: false,
      },
      {
        name: "Black",
        class: "bg-[#141414]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Fleece Shorts",
    category: "shorts",
    description:
      "The warm weather cousin of our infamous fleece pants, the Fleece Shorts are the perfect option for heading out with a comfortable fit or just lounging around the house.",
    details: [
      "Custom garment dyed heavyweight 360g fleece",
      "Elastic waist with hidden draw cords",
      "Side-seam front pockets and back welt pockets",
      "TAIKAN front embroidered logo",
      "Relaxed fit 9” inseam",
      "Available in: Black Acid, Brown, Black, Cream",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "1.895.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TS0005_BLKA-4.jpg?v=1677262401&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TS0005_BRN-1.jpg?v=1677262401&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Fleece-Short-Black-1.jpg?v=1677262401&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Fleece-Short-Cream-5.jpg?v=1677008904&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TS0005_BLKA-4.jpg?v=1677262401&width=900",
    imageAlt: "Fleece Shorts",
    colors: [
      {
        name: "Black Acid",
        class: "bg-[#242424]",
        inStock: true,
      },
      {
        name: "Brown",
        class: "bg-[#4D3620]",
        inStock: false,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
      {
        name: "Cream",
        class: "bg-[#E7DCC0]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Mesh Shorts",
    category: "shorts",
    description:
      "Introducing the Nylon Short, the most versatile pair in the line. Made from quick-drying unlined nylon, this shorts can go from the streets to the ocean and back without a blink.",
    details: [
      "Elastic waist with hidden draw cords",
      "Side-seam front pockets",
      "Single back classic velcro pocket with lower drain hole",
      "TAIKAN front embroidered logo",
      "Regular fit 7” inseam",
      "Available in: Forest Green, Royal, Black, Moss",
      "Quick-drying unlined 100% Nylon",
    ],
    // href: "productid1",
    quantity: 1,
    price: "1.769.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TS0004_WHT-4.jpg?v=1677261756&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Mesh-Shorts-Black-1.jpg?v=1677261756&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Mesh-Shorts-Sand-2.jpg?v=1677261756&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TS0004_ROY-5.jpg?v=1677261756&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TS0004_WHT-4.jpg?v=1677261756&width=900",
    imageAlt: "Mesh Shorts",
    colors: [
      {
        name: "White",
        class: "bg-[#DBDAD1]",
        inStock: true,
      },
      {
        name: "Royal",
        class: "bg-[#104582]",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
      {
        name: "Sand",
        class: "bg-[#DCAC70]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Corduroy Shorts",
    category: "shorts",
    description:
      "The Corduroy Shorts provide a unique textural twist to your lineup of shorts, setting them apart from any other pair in your wardrobe.",
    details: [
      "Fitted waistband with belt loops",
      "Side slash front pockets with right side coin pocket",
      "Zipper fly",
      "TAIKAN flag side label",
      "Single welt back pockets",
      "Relaxed fit 9” inseam",
      "Available in: Dune, Black",
      "100% Cotton, lightly brushed corduroy",
    ],
    // href: "productid1",
    quantity: 1,
    price: "2.274.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TS0003_DNE-4.jpg?v=1677263209&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TS0003_DNE-1.jpg?v=1677004837&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TS0003_DNE-2.jpg?v=1677263209&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TS0003_DNE-5.jpg?v=1677263209&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TS0003_DNE-4.jpg?v=1677263209&width=900",
    imageAlt: "Corduroy Shorts",
    colors: [
      {
        name: "Dune",
        class: "bg-[#967756]",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: false,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Classic Shorts",
    category: "shorts",
    description:
      "The Classic Shorts speak for themselves. With a timeless cut and length, this short is the perfect weight and fit for anything from everyday usage to travel and exploration.",
    details: [
      "Elastic waist with hidden draw cords",
      "Side-seam front pockets",
      "Single welt back pockets with TAIKAN embroidery",
      "TAIKAN flag side label",
      "Relaxed fit 7.5” inseam",
      "Available in: Brown, Black, Moss",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "1.895.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TS0002_BRN-4.jpg?v=1677262716&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Classic-Shorts-Black-1.jpg?v=1677262716&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Classic-Shorts-Moss-2.jpg?v=1677262716&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Classic-Shorts-Black-5.jpg?v=1677262716&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TS0002_BRN-4.jpg?v=1677262716&width=900",
    imageAlt: "Corduroy Shorts",
    colors: [
      {
        name: "Brown",
        class: "bg-[#DBDAD1]",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
      {
        name: "Moss",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  // t-shirts
  {
    id: uuidv4(),
    name: "Heavyweight S/S T Set",
    category: "t-shirts",
    description:
      "High quality tee with a perfect fit, created with custom heavyweight 280g garment dyed cotton. Straight up clean and to the point, a must have staple in any wardrobe to match any fit.",
    details: [
      "Custom heavyweight 280g crew t-shirt",
      "Available in: Lavender, Black Acid, Cream, Moss, White, Green, Black, Navy, Forest Green, Brown",
      "100% Cotton",
      "Model Specs: Height is 5’11, weight is 155 lbs and waist 32” wearing size large mens (except t-shirt is Medium)",
    ],
    // href: "productid1",
    quantity: 1,
    price: "2.502.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Heavyweight-Tee-Black-3.jpg?v=1694621463&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TAIKAN-Heavyweight-Tee-Black-1_134b10d6-93d1-42b5-8457-b3c95113bd14.jpg?v=1690585203&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Heavyweight-Tee-White-1.jpg?v=1694621463&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Heavyweight-Tee-White-4.jpg?v=1694621463&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/TAIKAN-Heavyweight-Tee-Black-White-1.jpg?v=1690570573&width=900",
    imageAlt: "Heavyweight S/S T Set",
    colors: [
      {
        name: "White & Black",
        class: "bg-gradient-to-r from-black-3 to-white",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Heavyweight S/S T",
    category: "t-shirts",
    description:
      "High quality tee with a perfect fit, created with custom heavyweight 280g garment dyed cotton. Straight up clean and to the point, a must have staple in any wardrobe to match any fit.",
    details: [
      "Custom heavyweight 280g crew t-shirt",
      "Available in: Lavender, Black Acid, Cream, Moss, White, Green, Black, Navy, Forest Green, Brown",
      "100% Cotton",
      "Model Specs: Height is 5’11, weight is 155 lbs and waist 32” wearing size large mens (except t-shirt is Medium)",
    ],
    // href: "productid1",
    quantity: 1,
    price: "1.390.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Heavyweight-Tee-Black-3.jpg?v=1694621463&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TT0001_WNE_P_1.png?v=1694621463&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Heavyweight-Tee-White-1.jpg?v=1694621463&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-PLAIN-TEE-FOREST-GREEN-4.jpg?v=1694621463&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Heavyweight-Tee-Black-3.jpg?v=1694621463&width=900",
    imageAlt: "Heavyweight S/S T",
    colors: [
      {
        name: "Wine",
        class: "bg-[#862931]",
        inStock: true,
      },
      {
        name: "Black Acid",
        class: "bg-[#444046]",
        inStock: true,
      },
      {
        name: "White",
        class: "bg-[#fff]",
        inStock: true,
      },
      {
        name: "Forest Green",
        class: "bg-[#1C4A3A]",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Organic S/S T",
    category: "t-shirts",
    description:
      "Our GOTS certified (global organic textile standard) organic cotton blend tee is the perfect cross of comfort and function. This tee will allow breathability and comfort with every wear, finished with our signature Taikan flag label at side seam.",
    details: [
      "Organic cotton blend",
      "Flag label at side seam",
      "90% Cotton 10% Polyester",
    ],
    // href: "productid1",
    quantity: 1,
    price: "1.264.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/013_0033_013-ONBODY_0110_TAIKAN-013-ON-BODY-035_7aa616a0-43d2-4928-b89d-3b4bdda4cf5d.png?v=1694555630&width=720",
      "https://www.taikaneverything.com/cdn/shop/files/BLKORGTEE.png?v=1694555630&width=720",
      "https://www.taikaneverything.com/cdn/shop/files/ORGTEE.png?v=1694555630&width=720",
      "https://www.taikaneverything.com/cdn/shop/files/013_0022_013-ONBODY_0121_TAIKAN-013-ON-BODY-024_44a2bd28-ec2a-4192-a754-520a4d84c076.png?v=1694555630&width=720",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/013_0033_013-ONBODY_0110_TAIKAN-013-ON-BODY-035_7aa616a0-43d2-4928-b89d-3b4bdda4cf5d.png?v=1694555630&width=720",
    imageAlt: "Organic S/S T",
    colors: [
      {
        name: "Off-White",
        class: "bg-[#F8F3E7]",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Matt Gazzola Smoke S/S Tee",
    category: "t-shirts",
    description:
      "High quality tee with a perfect fit, created with custom heavyweight 280g garment dyed cotton. Graphics by Matt Gazzola.",
    details: [
      "Custom heavyweight 280g crew t-shirt",
      "Matt Gazzola “Smoke” graphic details",
      "100% cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "1.643.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/TT0006_CHA_A_4.png?v=1694455232&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TAIKAN013-131.png?v=1694533643&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TAIKANSMOKETEEBACK.png?v=1693927958&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TT0006_CRM_A_6.png?v=1694533643&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/TT0006_CHA_A_4.png?v=1694455232&width=900",
    imageAlt: "Matt Gazzola Smoke S/S Tee",
    colors: [
      {
        name: "Charcoal",
        class: "bg-[#616365]",
        inStock: true,
      },
      {
        name: "Cream",
        class: "bg-[#FEF7E9]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  // hoodies
  {
    id: uuidv4(),
    name: "Dip Dye Hoodie",
    category: "hoodies",
    description:
      "We created the perfect fitting custom heavyweight hoodie with a solid 360g weight. With removed drawstrings and a single branded flag label, this piece can be cleanly matched with any fit. Available in a variety of garment dyed solids and hand dip dyed colour treatments.",
    details: [
      "Custom garment dyed heavyweight 360g fleece",
      "Ribbed hem and sleeve cuffs",
      "External front kangaroo pocket",
      "TAIKAN flag side label",
      "Available in: Dip Dye Tan / Cream",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "3.032.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/013_0042_013-ONBODY_0101_TAIKAN-013-ON-BODY-044_aa293f7b-7214-4230-8a5c-bd126c736d96.png?v=1694545130&width=720",
      "https://www.taikaneverything.com/cdn/shop/files/DIPTANCRM.png?v=1694545145&width=720",
      "https://www.taikaneverything.com/cdn/shop/files/013-ONBODY_0020_TAIKAN-013-ON-BODY-125.png?v=1694545130&width=720",
      "https://www.taikaneverything.com/cdn/shop/files/013_0043_013-ONBODY_0100_TAIKAN-013-ON-BODY-045_069c72f8-ad7f-45fe-83f2-0627580198bf.png?v=1694545130&width=720",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/013-ONBODY_0019_TAIKAN-013-ON-BODY-126.png?v=1694545130&width=720",
    imageAlt: "Dip Dye Hoodie",
    colors: [
      {
        name: "Dip Dye Tan / Cream",
        class: "bg-gradient-to-r from-[#B8925F] to-[#FEFCFB]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Acid Hoodie",
    category: "hoodies",
    description:
      "We created the perfect fitting custom heavyweight hoodie with a solid 360g weight. With removed drawstrings and a single branded flag label, this piece can be cleanly matched with any fit. Available in a variety of garment dyed solids and hand dip dyed colour treatments.",
    details: [
      "Custom garment dyed heavyweight 360g fleece",
      "Ribbed hem and sleeve cuffs",
      "External front kangaroo pocket",
      "TAIKAN flag side label",
      "Available in: Black Acid, Brown Acid",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "3.032.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-PLAIN-HOODIE-BLACK-ACID-3.jpg?v=1694545130&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TH0001_BRNA_P_1_91062d8f-908a-43b8-be18-09427fd83650.png?v=1694620692&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TH0001_BRNA_A_2.png?v=1694620692&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-PLAIN-HOODIE-BLACK-ACID-4.jpg?v=1694545130&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-PLAIN-HOODIE-BLACK-ACID-3.jpg?v=1694545130&width=900",
    imageAlt: "Acid Hoodie",
    colors: [
      {
        name: "Black Acid",
        class: "bg-[#4D4947]",
        inStock: true,
      },
      {
        name: "Brown Acid",
        class: "bg-[#403025]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Black Contrast Stitch",
    category: "hoodies",
    description:
      "We created the perfect fitting custom heavyweight hoodie with a solid 360g weight. With removed drawstrings and a single branded flag label, this piece can be cleanly matched with any fit. Available in a variety of garment dyed solids and hand dip dyed colour treatments.",
    details: [
      "Custom garment dyed heavyweight 360g fleece",
      "Ribbed hem and sleeve cuffs",
      "External front kangaroo pocket",
      "TAIKAN flag side label",
      "Available in: Black Contrast Stitch",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "2.653.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://warsawsneakerstore.com/storage/media/f1000/2023/taikan/219287/taikan-custom-hoodie-black-contrast-stitch-th0001-blkcst-6447991448c9d.jpg",
      "https://www.taikaneverything.com/cdn/shop/products/TH0001_BLKCST-1.jpg?v=1694620692&width=720",
      "https://warsawsneakerstore.com/storage/media/f1000/2023/taikan/219287/taikan-custom-hoodie-black-contrast-stitch-th0001-blkcst-6447991448d45.jpg",
      "https://warsawsneakerstore.com/storage/media/f1000/2023/taikan/219287/taikan-custom-hoodie-black-contrast-stitch-th0001-blkcst-6447991448d9c.jpg",
    ], // === 4
    imageSrc:
      "https://warsawsneakerstore.com/storage/media/f1000/2023/taikan/219287/taikan-custom-hoodie-black-contrast-stitch-th0001-blkcst-6447991448c9d.jpg",
    imageAlt: "Black Contrast Stitch",
    colors: [
      {
        name: "Black Contrast",
        class: "bg-[#2C2C2C]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Custom Hoodie",
    category: "hoodies",
    description:
      "We created the perfect fitting custom heavyweight hoodie with a solid 360g weight. With removed drawstrings and a single branded flag label, this piece can be cleanly matched with any fit. Available in a variety of garment dyed solids and hand dip dyed colour treatments.",
    details: [
      "Custom garment dyed heavyweight 360g fleece",
      "Ribbed hem and sleeve cuffs",
      "External front kangaroo pocket",
      "TAIKAN flag side label",
      "Available in: Wine, Black, White",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "2.653.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/TH0001_WNE_A_3.png?v=1694620692&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TH0001_WNE_P_1_b1ac756f-871d-4948-8b21-3793b6579e2d.png?v=1694620692&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Plain-Hoodie-White-3.jpg?v=1694545130&width=900",
      "https://www.taikaneverything.com/cdn/shop/products/TAIKAN-Plain-Hoodie-Black-4.jpg?v=1694545130&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/TH0001_WNE_A_3.png?v=1694620692&width=900",
    imageAlt: "Custom Hoodie",
    colors: [
      {
        name: "Wine",
        class: "bg-[#8B1D22]",
        inStock: true,
      },
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
      {
        name: "White",
        class: "bg-[#fff]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Custom Full-Zip Hoodie",
    category: "hoodies",
    description:
      "A new adaptation of our classic heavyweight hoodie brings ideal functionality with a two way YKK zipper and split external kangaroo pockets. The Custom Full-Zip Hoodie is the ideal layering piece for changing temperatures and showcasing your entire fit.",
    details: [
      "Custom garment dyed heavyweight 360g fleece",
      "Ribbed hem and sleeve cuffs",
      "Front double-zip closure",
      "External front kangaroo pocket",
      "TAIKAN flag side label",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "3.159.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/013_0046_013-ONBODY_0097_TAIKAN-013-ON-BODY-048_c0162a5c-f9a9-482e-9227-af62d4ec9771.png?v=1694543968&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/BLACKZIPHOODIECLOSED.png?v=1694543968&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/BLACKZIPHOODIEOPEN.png?v=1694543968&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/013_0047_013-ONBODY_0096_TAIKAN-013-ON-BODY-049_e1cf9ff9-f05c-4f01-a062-8a9d3d6ea7f6.png?v=1694543968&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/013_0046_013-ONBODY_0097_TAIKAN-013-ON-BODY-048_c0162a5c-f9a9-482e-9227-af62d4ec9771.png?v=1694543968&width=900",
    imageAlt: "Custom Full-Zip Hoodie",
    colors: [
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
      {
        name: "Heather Gey",
        class: "bg-[#ADADB0]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Joshua Running Hoodie",
    category: "hoodies",
    description:
      "We created the perfect fitting custom heavyweight hoodie with a solid 360g weight. With removed drawstrings and a single branded flag label, this piece can be cleanly matched with any fit. Available in a variety of garment dyed solids and hand dyed colour treatments. Embroidered graphic by Joshua.",
    details: [
      "360g Premium fleece fabric",
      "“Running” artwork embroidered detail",
      "Contrast stitch detailing",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "3.032.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/013_0019_013-ONBODY_0124_TAIKAN-013-ON-BODY-021_7a185bf1-9264-41cd-84f7-a9ec38dbb0a9.png?v=1694532003&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TH0006_BLKCST_P_1.png?v=1693941650&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/013_0019_013-ONBODY_0124_TAIKAN-013-ON-BODY-021_7a185bf1-9264-41cd-84f7-a9ec38dbb0a9.png?v=1694532003&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/013-ONBODY_0021_TAIKAN-013-ON-BODY-123.png?v=1694453003&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/013_0019_013-ONBODY_0124_TAIKAN-013-ON-BODY-021_7a185bf1-9264-41cd-84f7-a9ec38dbb0a9.png?v=1694532003&width=900",
    imageAlt: "Joshua Running Hoodie",
    colors: [
      {
        name: "Black",
        class: "bg-[#1D1C21]",
        inStock: true,
      },
      {
        name: "Heather Gey",
        class: "bg-[#ADADB0]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: uuidv4(),
    name: "Stank Daddy Hoodie",
    category: "hoodies",
    description:
      "We created the perfect fitting custom heavyweight hoodie with a solid 360g weight. With removed drawstrings and a single branded flag label, this piece can be cleanly matched with any fit. Available in a variety of garment dyed solids and hand dyed colour treatments. Screened hood graphics by Stank Daddy.",
    details: [
      "360g Premium fleece fabric",
      "Stank Daddy doodle details on hood",
      "Contrast stitch detailing",
      "100% Cotton",
    ],
    // href: "productid1",
    quantity: 1,
    price: "3.032.000₫",
    salePrice: "",
    status: "sale",
    rating: 3.9,
    reviewCount: 117,
    imageSrcs: [
      "https://www.taikaneverything.com/cdn/shop/files/013-ONBODY_0033_TAIKAN-013-ON-BODY-111.png?v=1694452087&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/TH0007_BLKCST_P_1_ba0a2763-8e6c-4c44-9558-d61cab949421.png?v=1693941580&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/013-ONBODY_0034_TAIKAN-013-ON-BODY-110.png?v=1694452063&width=900",
      "https://www.taikaneverything.com/cdn/shop/files/013_0110_013-ONBODY_0033_TAIKAN-013-ON-BODY-111_9f36c5b4-5381-47ee-9140-3e5d7b1a2a41.png?v=1694532180&width=900",
    ], // === 4
    imageSrc:
      "https://www.taikaneverything.com/cdn/shop/files/013-ONBODY_0033_TAIKAN-013-ON-BODY-111.png?v=1694452087&width=900",
    imageAlt: "Stank Daddy Hoodie",
    colors: [
      {
        name: "Black Constrast",
        class: "bg-[#181920]",
        inStock: true,
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
];
export { products };
