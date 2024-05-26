"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import { BlogCard, BlogCardSkeleton } from "@/components/card/blog-card";
import { SectionCarousel } from "@/components/carousel/section-carousel";
import { CarouselItem } from "@/components/ui/carousel";

import { Blog } from "@/interface";

export const Blogs = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  return (
    <SectionCarousel
      title="Recent Blogs"
      href="/blogs"
      label="See All"
      status={status}
      componentSkeleton={BlogCardSkeleton}
    >
      {data?.data?.blogs?.map((data: Blog, index: Key) => (
        <CarouselItem
          key={index}
          className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
        >
          <BlogCard data={data} />
        </CarouselItem>
      ))}
    </SectionCarousel>
  );
};
