"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import { TopDestinationCard } from "@/components/card/top-destination-card";
import { SkeletonCard } from "@/components/card/skeleton-card";
import { SectionCarousel } from "@/components/carousel/section-carousel";
import { CarouselItem } from "@/components/ui/carousel";

import { TopDestination } from "@/interface";

export const TopDestinations = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <SectionCarousel
      title="Explore World's Top Destinations"
      href="/top-destinations"
      label="See All"
      status={status}
      componentSkeleton={SkeletonCard}
    >
      {data?.data?.topDestinations?.map((data: TopDestination, index: Key) => (
        <CarouselItem
          key={index}
          className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
        >
          <TopDestinationCard data={data} />
        </CarouselItem>
      ))}
    </SectionCarousel>
  );
};
