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
interface TopDestination {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  country: string;
}
interface TopDestinationsProps {
  data: TopDestination[];
}

export const TopDestinations = ({ data }: TopDestinationsProps) => {
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
          {data.map(({ id, name, description, imagePath, country }) => (
            <CarouselItem
              key={id}
              className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
            >
              <TopDestinationCard
                imagePath={imagePath}
                name={name}
                description={description}
                country={country}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
