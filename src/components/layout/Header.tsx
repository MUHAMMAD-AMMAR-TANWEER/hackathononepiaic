import logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-6 wrapper mx-auto">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40" />
      </Link>
      <div className="hidden lg:block">
        <ul className="flex gap-x-10 ">
          <li className="text-lg text-bold">
            <Link href={"/category/female"}>Female</Link>
          </li>
          <li className="text-lg text-bold">
            <Link href={"/category/male"}>Male</Link>
          </li>
          <li className="text-lg text-bold">
            <Link href={"/category/kids"}>Kids</Link>
          </li>
          <li className="text-lg text-bold">
            <Link href={"/products"}>All Products</Link>
          </li>
        </ul>
      </div>
      <div className="border flex items-center text-gray-600 rounded-md px-3">
        <BiSearch />
        <input
          type="text"
          className="pr-5 py-1 pl-1 w-80"
          placeholder="Searh in our store"
        />
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
        <ShoppingCart className="h-6 w-6" />
        <div className="h-4 w-4 absolute mb-5 ml-3 bg-orange-500 text-xs font-light rounded-full flex justify-center items-center">
          3
        </div>
      </div>
    </div>
  );
};
