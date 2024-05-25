"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import { BestOffersTripCard } from "@/components/card/best-offers-trip-card";
import { SectionCarousel } from "@/components/carousel/section-carousel";
import { CarouselItem } from "@/components/ui/carousel";

import { BestOffersTrip } from "@/interface";
import { SkeletonCard } from "@/components/card/skeleton-card";

export const BestOffersTrips = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <SectionCarousel
      title="Rehlatiuae Best Offers Trips"
      href="/best-offers-trips"
      label="See All"
      status={status}
      componentSkeleton={SkeletonCard}
    >
      {data?.data?.bestTrips?.map((data: BestOffersTrip, index: Key) => (
        <CarouselItem
          key={index}
          className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
        >
          <BestOffersTripCard data={data} />
        </CarouselItem>
      ))}
    </SectionCarousel>
  );
};
