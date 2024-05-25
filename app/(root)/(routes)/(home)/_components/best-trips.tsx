"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import { BestTripCard } from "@/components/card/best-trip-card";
import { SkeletonCard } from "@/components/card/skeleton-card";
import { SectionCarousel } from "@/components/carousel/section-carousel";
import { CarouselItem } from "@/components/ui/carousel";

import { BestTrip } from "@/interface";

export const BestTrips = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <SectionCarousel
      title="Rehlatiuae Best Trips"
      href="/best-trips"
      label="See All"
      status={status}
      componentSkeleton={SkeletonCard}
    >
      {data?.data?.bestTrips?.map((data: BestTrip, index: Key) => (
        <CarouselItem
          key={index}
          className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
        >
          <BestTripCard data={data} />
        </CarouselItem>
      ))}
    </SectionCarousel>
  );
};
