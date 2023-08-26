import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
const AllProducts = () => {
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {Products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          tagline={product.tagline}
          price={product.price}
          img={product.image}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};
export default AllProducts;
