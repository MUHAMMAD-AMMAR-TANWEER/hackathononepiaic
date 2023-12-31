import ProductCard from "@/components/ProductCard";
import P1 from "/public/product1.png";
import P2 from "/public/product2.png";
import P3 from "/public/product3.png";
import { Products } from "@/utils/mock";

const ProductList = () => {
  const productsChunk = Products.slice(0, 3);
  return (
    <div className="px-6">
      <h1 className="flex text-blue-500 mt-20 font-bold text-base justify-center">PRODUCTS</h1>
      <h1 className="flex  mt-1 font-bold text-3xl justify-center">Check What We Have</h1>
      <div className="flex justify-center ">
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
    </div>
  );
};

export default ProductList;
