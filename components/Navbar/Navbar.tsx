import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CategoryButtons from "./CategoryButton";

const Navbar = () => {
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={90}
            className="cursor-pointer"
          ></Image>
        </Link>
        <CategoryButtons />
        <div className="hidden md:flex gap-2 items-center border rounded-full  px-5 ">
          <Search className="h-5 w-5" />
          <Input
            placeholder="Ara..."
            className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingCart className="h-7 w-7" />
          <span className="bg-green-600 text-white h-5 w-5 flex justify-center items-center text-sm rounded-full -mt-5 -ms-2">
            2
          </span>
        </h2>
        <Button className="bg-green-600">Giriş Yap</Button>
      </div>
    </div>
  );
};

export default Navbar;
