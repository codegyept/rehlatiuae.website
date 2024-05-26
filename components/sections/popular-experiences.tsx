"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import { PopularExperienceCard } from "@/components/cards/popular-experience-card";
import { SkeletonCard } from "@/components/cards/skeleton-card";
import { SectionCarousel } from "@/components/carousel/section-carousel";
import { CarouselItem } from "@/components/ui/carousel";

import { PopularExperience } from "@/interface";

export const PopularExperiences = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <SectionCarousel
      title="Rehlatiuae Popular Experiences"
      href="/popular-experiences"
      label="See All"
      status={status}
      componentSkeleton={SkeletonCard}
    >
      {data?.data?.popularExperiencetrips?.map(
        (data: PopularExperience, index: Key) => (
          <CarouselItem
            key={index}
            className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
          >
            <PopularExperienceCard data={data} />
          </CarouselItem>
        )
      )}
    </SectionCarousel>
  );
};
