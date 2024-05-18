"use client";

import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { CategoryCard } from "@/components/card/category-card";

import { categories } from "@/config/site";

export const Categories = () => {
  return (
    <div className="py-10 container mx-auto">
      <Heading title="Rehlatiuae Categories">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href="/categories">
            see all <ArrowUpRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </Heading>
      <Carousel
        className="mt-10"
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
              className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 3xl:basis-1/6  h-[250px] group flex justify-center items-end"
            >
              <CategoryCard src={src} alt={alt} label={label} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
