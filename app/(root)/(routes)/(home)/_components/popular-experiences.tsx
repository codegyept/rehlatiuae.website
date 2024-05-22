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
  PopularExperienceCard,
  PopularExperienceCardSkeleton,
} from "@/components/card/popular-experience-card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const PopularExperiences = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <div className="py-10 container mx-auto">
      <Heading title="Rehlatiuae Popular Experiences">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href="/popular-experiences">
            see all <ArrowUpRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </Heading>
      {status === "loading" && (
        <div className="mt-10 flex items-center justify-start gap-5 overflow-x-hidden">
          <PopularExperienceCardSkeleton />
          <PopularExperienceCardSkeleton />
          <PopularExperienceCardSkeleton />
          <PopularExperienceCardSkeleton />
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
            {data?.data?.popularExperiencetrips.map((data, index) => (
              <CarouselItem
                key={index}
                className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
              >
                <PopularExperienceCard data={data} />
              </CarouselItem>
            ))}
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