import { getCategoriesDetail } from "@/actions/getCategoriesDetail";
import ProductList from "@/components/Product/ProductList";
import React from "react";
import TopCategory from "../_components/TopCategory";
import { getCategories } from "@/actions/getCategories";

interface CategoryNamePageProps {
  params: {
    categoryName: string;
  };
}
const CategoryNamePage = async ({ params }: CategoryNamePageProps) => {
  const categoryDetail = await getCategoriesDetail(params.categoryName);
  const categoryList = await getCategories();
  return (
    <div>
      <h1 className="p-4 bg-green-600 text-white font-bold text-center text-4xl mb-5">
        {params.categoryName}
      </h1>
      <TopCategory categoryList={categoryList} />
      <div className="p-8 ">
        <ProductList productList={categoryDetail} />
      </div>
    </div>
  );
};

export default CategoryNamePage;
