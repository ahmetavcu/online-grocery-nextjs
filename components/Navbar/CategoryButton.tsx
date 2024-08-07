"use client";
import { useCategoriesStore } from "@/hooks/useCategoriesStore";
import { LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
const CategoryButtons = () => {
  const { categories, fetchCategories } = useCategoriesStore((state) => ({
    categories: state.categories,
    fetchCategories: state.fetchCategories,
  }));

  const [fetched, setFetched] = useState(false);
  if (!fetched) {
    fetchCategories();
    setFetched(true);
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
            <LayoutGrid className="h-5 w-5" />
            Kategoriler
          </h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Kategorileri Keşfet</DropdownMenuLabel>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          {categories.map((category, index) => (
            <Link href={"/category/" + category.name} key={index}>
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category?.icon?.data?.attributes?.url
                  }
                  width={30}
                  height={30}
                  alt={category.name}
                />
                <p>{category.name}</p>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryButtons;
