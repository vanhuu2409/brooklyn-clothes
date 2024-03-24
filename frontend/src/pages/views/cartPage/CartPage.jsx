const CartPage = () => {
  return (
    <div>
      <div className='flex flex-col w-full border-t'>
        {[
          {
            id: 123,
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
        ].map((item) => (
          <div
            key={item?.id}
            className='grid grid-cols-6 grid-rows-1 gap-4 px-6 py-4 text-black border-b'
          >
            {/* img */}
            <img
              src={item?.imageSrc}
              className='aspect-square hover:scale-110 object-contain col-span-2 transition-transform duration-300'
            />
            {/* body */}
            <div className='sm:py-4 flex flex-col w-full h-full col-span-4'>
              {/* top body */}
              <div className='flex flex-col self-center flex-1 w-full'>
                <h4 className='text-[.625rem] sm:text-[.75rem] text-black-4 font-bold'>
                  berlin lifestyle
                </h4>
                <h2 className='text-black-2 sm:text-xl text-lg font-extrabold'>
                  {item?.name}
                </h2>
              </div>
              {/* center */}
              {/* size select */}
              <span className='text-black-3 flex-1 text-base font-extrabold'>
                M
              </span>
              {/* bottom body */}
              <div className='flex items-center justify-between'>
                {/* left bottom */}
                <p className='text-black-3 sm:text-base flex gap-1 text-sm font-bold'>
                  {item?.price}
                  <span className='text-black-4 font-light'>/</span>
                </p>
                {/* middle */}
                <div className='flex items-center border'>
                  {/* increase quantity */}
                  <button
                    className='px-2 py-1'
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <input
                    type='number'
                    value={item.quantity}
                    onChange={(e) => handleOnChangeQuantity(e, item)}
                    // onBlur={(e) => handleOnBlurQuantity(e, item)}
                    className='spin focus:border-x w-10 px-2 py-1 text-[.8rem] text-center rounded-none outline-none'
                  />
                  {/* increase quantity */}
                  <button
                    className='px-2 py-1'
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                {/* right */}
                <button
                  className='p-2'
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='sm:h-5 sm:w-5 w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
