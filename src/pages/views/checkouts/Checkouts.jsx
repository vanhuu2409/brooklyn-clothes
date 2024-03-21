import { Link } from "react-router-dom";

const Checkouts = () => {
  const products = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
  return (
    <>
      <div className='w-fit w-full mt-8 overflow-scroll'>
        <div className='flow-root'>
          <ul role='list' className='-my-6 divide-y divide-gray-200'>
            {products.map((product) => (
              <li key={product.id} className='flex py-6'>
                <div className='flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md'>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='object-cover object-center w-full h-full'
                  />
                </div>

                <div className='flex flex-col flex-1 ml-4'>
                  <div>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className='ml-4'>{product.price}</p>
                    </div>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.color}
                    </p>
                  </div>
                  <div className='flex items-end justify-between flex-1 text-sm'>
                    <p className='text-gray-500'>Qty {product.quantity}</p>

                    <div className='flex'>
                      <button
                        type='button'
                        className='hover:text-indigo-500 font-medium text-indigo-600'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='sm:px-6 px-4 py-6 border-t border-gray-200'>
        <div className='flex justify-between text-base font-medium text-gray-900'>
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className='mt-0.5 text-sm text-gray-500'>
          Shipping and taxes calculated at checkout.
        </p>
        <div className='mt-6'>
          <a
            href='#'
            className='hover:bg-indigo-700 flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm'
          >
            Checkout
          </a>
        </div>
        <div className='flex justify-center mt-6 text-sm text-center text-gray-500'>
          <p>
            or{" "}
            <Link
              to='/'
              className='hover:text-indigo-500 font-medium text-indigo-600'
            >
              Continue Shopping
              <span aria-hidden='true'> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkouts;
