"use client";

import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { ArrowUpRight, TriangleAlert } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  TopDestinationCard,
  TopDestinationCardSkeleton,
} from "@/components/card/top-destination-card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

interface TopDestination {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  country: string;
}

export const TopDestinations = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <div className="py-10 container mx-auto">
      <Heading title="Explore World's Top Destinations">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href="/top-destinations">
            see all <ArrowUpRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </Heading>
      {status === "loading" && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-col md:gap-5">
          <TopDestinationCardSkeleton />
          <TopDestinationCardSkeleton />
          <TopDestinationCardSkeleton />
          <TopDestinationCardSkeleton />
        </div>
      )}
      {status === "succeeded" && (
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
            {data?.data?.topDestinations.map(
              ({
                id,
                name,
                description,
                imagePath,
                country,
              }: TopDestination) => (
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
              )
            )}
          </CarouselContent>
        </Carousel>
      )}
      {status === "failed" && (
        <div className="h-[200px] flex justify-center items-center">
          <p className="text-muted-foreground flex items-center">
            <TriangleAlert className="h-5 w-5 mr-2" />
            No result
          </p>
        </div>
      )}
    </div>
  );
};
