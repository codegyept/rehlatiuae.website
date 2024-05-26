"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import {
  PartnerCard,
  PartnerCardSkeleton,
} from "@/components/card/partner-card";
import { CarouselItem } from "@/components/ui/carousel";
import { HeadingCarousel } from "@/components/carousel/heading-carousel";
import { ModalCarousel } from "@/components/carousel/modal-carousel";

import { Partner } from "@/interface";

export const Partners = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  let content;

  switch (status) {
    case "loading":
      content = (
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <PartnerCardSkeleton />
          <PartnerCardSkeleton />
          <PartnerCardSkeleton className="hidden md:block " />
          <PartnerCardSkeleton className="hidden md:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
        </div>
      );
      break;
    case "failed":
      content = (
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <PartnerCardSkeleton />
          <PartnerCardSkeleton />
          <PartnerCardSkeleton className="hidden md:block " />
          <PartnerCardSkeleton className="hidden md:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
        </div>
      );
      break;
    case "succeeded":
      content = (
        <ModalCarousel delay={0} duration={8000}>
          {data?.data?.ourPartners?.map((data: Partner, index: Key) => (
            <CarouselItem
              key={index}
              className="relative basis-1/2 md:basis-1/4 lg:basis-1/6 cursor-pointer"
            >
              <PartnerCard data={data} />
            </CarouselItem>
          ))}
        </ModalCarousel>
      );
      break;
    default:
      content = null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <HeadingCarousel
          title="Our Partners"
          hrefButton="/partners"
          labelButton="See All"
        />
      </div>
      {content}
    </section>
  );
};
