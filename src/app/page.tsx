import Image from "next/image";
import { Button } from "@/components/ui/button";

import { HeartCrack } from "lucide-react";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
export default function Home() {
  return (
    <div className="m-6">
      <Hero />
      <ProductList />
    </div>
  );
}
