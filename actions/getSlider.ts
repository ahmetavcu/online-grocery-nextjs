import { Slider } from "@/types";
import axios from "axios";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sliders?populate=*`;

export const getSlider = async (): Promise<Slider[]> => {
  const response = await axios.get(Urls);
  const data = response.data.data;
  return data;
};
