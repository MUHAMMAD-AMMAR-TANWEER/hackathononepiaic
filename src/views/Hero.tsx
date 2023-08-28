import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi"
import heroImage from "/public/header.webp";
import Image from "next/image";
import brand1 from "/public/brand1.webp"
import brand2 from "/public/brand2.webp"
import brand3 from "/public/brand3.webp"
import brand4 from "/public/brand4.webp"

const Hero = () => {
  return (
    <section className="flex  items-start justify-center mt-14 gap-x-4 mx-8">
      {/* left */}
      <div className="flex-1 gap-y-15
      ">
        <Badge
          variant="outline"
          className="bg-blue-200 text-blue-700 px-6 py-2 mt-5 mb-10 rounded-2xl text-lg"
        >
          70% OFF
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">
          An Industrial take on streatwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2 mb-10">
        Anyone can beat you but no one can beat your outfit as long as you wear dine outfit.
      </p>
      
      <Button variant="outline" className="gap-x-2 hover:bg-gray-300 rounded-xl mb-10 border-white bg-gray-200"><FiShoppingCart />   Start Shopping</Button>
      <div className="flex gap-x-5">
        <Image src={brand1} alt="brand1" />
        <Image src={brand2} alt="brand2" />
        <Image src={brand3} alt="brand3" />
        <Image src={brand4} alt="brand4" />
      </div>
      </div>
      {/* right */}
      <div  className="flex-1 bg-orange-100 rounded-full ">
        <Image src={heroImage} alt="heroImage"/>
      </div>
      
    </section>
  );
};

export default Hero;
