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
import { TopDestinationCard } from "@/components/card/top-destination-card";

import { topDestinations } from "@/config/site";

export const TopDestinations = () => {
  return (
    <div className="py-10 container mx-auto">
      <Heading title="Explore World's Top Destinations">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href="/top-destinations">
            see all <ArrowUpRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </Heading>
      <Carousel
        className="mt-20"
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
          {topDestinations.map(({ src, label }, index) => (
            <CarouselItem
              key={index}
              className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 3xl:basis-1/6 cursor-pointer"
            >
              <TopDestinationCard src={src} label={label} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
