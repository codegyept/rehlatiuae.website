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
  PartnerCard,
  PartnerCardSkeleton,
} from "@/components/card/partner-card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

interface Partner {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  country: string;
}

export const Partners = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <>
      <div className="py-10 container mx-auto">
        <Heading title="Our Partners">
          <Button className="px-0 tracking-wide" variant="link" asChild>
            <Link href="/partners">
              see all <ArrowUpRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </Heading>
        {status === "loading" && (
          <div className="mt-10 grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5">
            <PartnerCardSkeleton />
            <PartnerCardSkeleton />
            <PartnerCardSkeleton />
            <PartnerCardSkeleton />
            <PartnerCardSkeleton />
            <PartnerCardSkeleton />
          </div>
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

      {status === "succeeded" && (
        <Carousel
          className="mt-10"
          opts={{
            align: "start",
            loop: true,
            duration: 5000,
          }}
          plugins={[
            Autoplay({
              delay: 500,
            }),
          ]}
        >
          <CarouselContent>
            {data?.data?.ourPartners.map(
              ({ id, name, description, imagePath }: Partner) => (
                <CarouselItem
                  key={id}
                  className="relative basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 3xl:basis-1/6  h-[250px] group flex justify-center items-end"
                >
                  <PartnerCard
                    imagePath={imagePath}
                    name={name}
                    description={description}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      )}
    </>
  );
};
