import { Products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Quantity from "@/components/Quantity";
const getProductDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};
export default function Page({ params }: { params: { slug: string } }) {
  const sizes = ["XS", "SM", "MD", "LG", "XL"];
  const result = getProductDetail(params.slug);
  return (
    <div className="flex  mt-16 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* left Side */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/* right side  */}
          <div>
            <div>
              <p className="text-2xl ">{product.name}</p>
              <p className="text-base text-gray-400 text-semi-bold">
                {product.tagline}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold mt-6">SELECT SIZE</h3>
              <div className="flex flex-row gap-x-3">
                {sizes.map((size) => (
                  <div className="w-6 h-6 mt-2 duration-200 border rounded-full hover:shadow-xl flex justify-center items-center">
                    <span className="text-xs font-bold text-center text-gray-600">
                      {size}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quantity  */}

              <div className="flex flex-row mt-6 items-center p-x-3 gap-x-3">
                <h3 className="font-bold"> Quantity</h3>
                <Quantity />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
