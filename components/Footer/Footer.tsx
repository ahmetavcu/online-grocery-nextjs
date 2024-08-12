import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterCategoriesProps {
  categories: Category[];
}
const Footer = ({ categories }: FooterCategoriesProps) => {
  return (
    <div className="bg-gray-300 mt-10">
      <div className="container   py-8 flex flex-col items-center">
        <div className="flex justify-center">
          <Image src="/logo.png" width={200} height={200} alt="Logo" />
        </div>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, esse dolore. Mollitia rem eos consequuntur quo
          suscipit tempora, sit commodi.
        </p>

        <ul className="flex items-center justify-between gap-8 mt-3">
          {categories.map((category, index) => (
            <li className="hover:text-green-600 ">
              <Link href={"/category/" + category.attributes?.name}>
                {category.attributes?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
