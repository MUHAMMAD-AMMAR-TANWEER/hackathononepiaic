import logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri"

export const Header = () => {
  return (
    <div className='flex justify-between items-center pt-6 px-6 max-w-screen-lg mx-auto '>
        <Image src={logo} alt='logo' className='object-contain' />
        <ul className='flex gap-x-6 tablet:hidden'>
            <li className='cursor-pointer hover:text-gray-700 transition-transform transform-grow hover:scale-125'>Female</li>
            <li className='cursor-pointer hover:text-gray-700 transition-transform transform-grow hover:scale-125'>Male</li>
            <li className='cursor-pointer hover:text-gray-700 transition-transform transform-grow hover:scale-125'>Kid</li>
            <li className='cursor-pointer hover:text-gray-700 transition-transform transform-grow hover:scale-125'>All Products</li>
        </ul>
        <div className='flex items-center gap-x-2 border border-slate-200 rounded-[5px] pl-1 w-64 tablet:hidden'>
            <BiSearch  style={{color: "#404e5a"}} className='ml-1' />
            <div>
                <input placeholder='What you looking for' className='outline-none text-slate-500 ' />
            </div>
        </div>
        <div className='relative h-9 w-9 flex items-center justify-center cursor-pointer bg-slate-100 rounded-full p-2 transition-transform transform-grow hover:scale-125 tablet:hidden'>
            <div className='bg-red-600 absolute h-3.5 w-3.5 rounded-full flex items-center justify-center  text-white p-1 top-0 text-xs right-0'>0</div>
            <FiShoppingCart className='' />
        </div>
        <div className="hidden tablet:block">
            <RiMenu2Line size={25} />
        </div>
    </div>
  );
};
