import Image, { StaticImageData } from "next/image";
import Link from "next/link";
const ProductCard = (props: {
  title: string;
  tagline: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) => {
  return (
   
      <Link href={`/products/${props.id}`}>
        <div className="py-3 mt-3">
          <Image
            src={props.img}
            alt="product"
            className="h-80 w-96 object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg mt-3 pl-2">{props.title}</h3>
          <p className="font-bold text-lg pl-2">${props.price}</p>
          <p className="font-bold text-lg pl-2">
            Category{" "}: 
            <span className="text-base font-normal capitalize"> {props.category}</span>
          </p>
        </div>
      </Link>
   
  );
};

export default ProductCard;
