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
import { BestOffersTripCard } from "@/components/card/best-offers-trip-card";

import { BestOffersTrip } from "@/interface";

interface BestOffersTripsProps {
  data: BestOffersTrip[];
}

export const BestOffersTrips = ({ data }: BestOffersTripsProps) => {
  return (
    <div className="py-10 container mx-auto">
      <Heading title="Rehlatiuae Best Offers Trips">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href="/best-offers-trips">
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
          {data.map((data, index) => (
            <CarouselItem
              key={index}
              className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
            >
              <BestOffersTripCard data={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
