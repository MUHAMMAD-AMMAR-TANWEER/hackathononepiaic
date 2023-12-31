import { Products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";

const getProductByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};
export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            tagline={product.tagline}
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image}
            category={product.category}
            id={product.id}
          />
        ))
      ) : (
        <p>No Products are found</p>
      )}
    </div>
  );
}
