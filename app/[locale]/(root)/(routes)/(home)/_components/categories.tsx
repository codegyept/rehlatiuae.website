"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { categories } from "@/config/site";

export const Categories = () => {
  return (
    <div className="py-10">
      <div className="container flex items-center justify-between border-b py-5">
        <h1 className="text-xl md:text-2xl tracking-wider">
          Rehlatiuae Categories
        </h1>
        <Button className="px-0 tracking-wide" variant="link">
          View all <ArrowUpRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {categories.map(({ src, alt, label }, index) => (
              <CarouselItem
                key={index}
                className="relative basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6  h-[250px] group flex justify-center items-end"
              >
                <Image
                  alt={alt}
                  src={src}
                  fill
                  className="object-contain group-hover:-translate-y-6 cursor-pointer scale-75 group-hover:scale-105 duration-300 ease-in-out"
                />
                <p>{label}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
