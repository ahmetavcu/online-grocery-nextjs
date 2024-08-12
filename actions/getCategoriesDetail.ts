import { Product } from "@/types";
import axios from "axios";

export const getCategoriesDetail = async (
  categoryName: string
): Promise<Product[]> => {
  const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?filters[categories][name][$in]=${categoryName}&populate=*`;
  const response = await axios.get(Urls);
  const data = response.data.data;
  return data;
};
