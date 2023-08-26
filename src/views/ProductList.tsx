import ProductCard from "@/components/ProductCard";
import P1 from "/public/product1.png";
import P2 from "/public/product2.png";
import P3 from "/public/product3.png";
import { Products } from "@/utils/mock";

const ProductList = () => {
  const productsChunk = Products.slice(0, 3);
  return (
    <div className="flex justify-evenly">
      {productsChunk.map((product) => (
        <ProductCard
          key={product.id}
          tagline={product.tagline}
          title={product.name}
          price={product.price}
          img={product.image}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
