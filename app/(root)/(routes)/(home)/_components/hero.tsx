"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { banners } from "@/config/site";

export const Hero = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-[500px] relative group"
    >
      <CarouselContent className="h-[500px]">
        {banners.map(({ src, alt }, index) => (
          <CarouselItem key={index} className="relative">
            <Image src={src} alt={alt} fill className="object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
