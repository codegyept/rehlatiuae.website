"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import {
  CategoryCard,
  CategoryCardSkeleton,
} from "@/components/cards/category-card";
import { CarouselItem } from "@/components/ui/carousel";
import { HeadingCarousel } from "@/components/carousel/heading-carousel";
import { ModalCarousel } from "@/components/carousel/modal-carousel";

import { Category } from "@/interface";

export const Categories = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  let content;

  switch (status) {
    case "loading":
      content = (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton className="hidden md:block " />
          <CategoryCardSkeleton className="hidden md:block" />
          <CategoryCardSkeleton className="hidden lg:block" />
          <CategoryCardSkeleton className="hidden lg:block" />
        </div>
      );
      break;
    case "failed":
      content = (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton className="hidden md:block " />
          <CategoryCardSkeleton className="hidden md:block" />
          <CategoryCardSkeleton className="hidden lg:block" />
          <CategoryCardSkeleton className="hidden lg:block" />
        </div>
      );
      break;
    case "succeeded":
      content = (
        <ModalCarousel>
          {data?.data?.categories?.map((data: Category, index: Key) => (
            <CarouselItem
              key={index}
              className="relative basis-1/2 md:basis-1/4 lg:basis-1/6 cursor-pointer"
            >
              <CategoryCard data={data} />
            </CarouselItem>
          ))}
        </ModalCarousel>
      );
      break;
    default:
      content = null;
  }

  return (
    <section className="py-20 container mx-auto">
      <HeadingCarousel
        title="Rehlatiuae Categories"
        hrefButton="/categories"
        labelButton="See All"
      />
      {content}
    </section>
  );
};
