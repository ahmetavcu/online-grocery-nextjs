import { Category } from "@/types";
import axios from "axios";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/categories?populate=*`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get(Urls);
  const data = response.data.data;
  return data;
};
