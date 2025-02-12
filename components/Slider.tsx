import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Slider } from "@/types";
import Image from "next/image";

interface SliderProps {
  sliderList: Slider[];
}
const Slider = ({ sliderList }: SliderProps) => {
  return (
    <div className="container">
      <Carousel>
        <CarouselContent>
          {sliderList.map((slider, index) => (
            <CarouselItem key={index}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                  slider?.attributes?.url?.data?.attributes?.url
                }
                width={1000}
                height={400}
                alt="slider"
                className="w-full h-[200px] md:h-[430px] object-cover "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
