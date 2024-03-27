import LayoutView from "../../../widgets/layout/LayoutView";
import { ProductCard } from "../product/ProductCard";
import { fetchData } from "../../../services/api";
const Products = () => {
  const products = fetchData;
  return (
    <LayoutView>
      <div className='gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 grid w-full h-full grid-cols-1'>
        {/* <!-- Your content --> */}
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </LayoutView>
  );
};

export default Products;
