import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TopCategoryProps {
  categoryList: Category[];
}

const TopCategory = ({ categoryList }: TopCategoryProps) => {
  return (
    <div className="container mt-10">
      <h2 className="text-green-700 font-bold text-2xl">Kategorilerimiz</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-2">
        {categoryList.map((category, index) => (
          <Link
            href={"/category/" + category.attributes.name}
            key={index}
            className="flex items-center justify-center rounded-full py-1 px-5 gap-2 bg-green-100 cursor-pointer hover:bg-green-500"
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                category?.attributes?.icon?.data?.attributes?.url
              }
              width={30}
              height={30}
              alt={category.name}
            />
            <p>{category.attributes.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
