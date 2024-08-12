import { Product } from "@/types";
import axios from "axios";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?populate=*`;

export const getProcuts = async (): Promise<Product[]> => {
  const response = await axios.get(Urls);
  const data = response.data.data;
  return data;
};
