import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "/public/header.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6 wrapper mx-auto">
      {/* Left Div  */}
      <div className="flex-1">
        <Badge className="py-1 px-4 text-lg bg-blue-200 text-blue-700 rounded-xl hover:bg-blue-200">
          Sale
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial take on streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <Button className="bg-black py-3.5 text-white rounded-xl h-12  mt-4">
          Start Shopping
        </Button>
      </div>

      {/* Right Div  */}

      <div className="flex-1">
        <Image src={heroImage} alt="hero Image" />
      </div>
    </section>
  );
};

export default Hero;
