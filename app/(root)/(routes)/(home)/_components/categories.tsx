"use client";

import { useEffect } from "react";
import { ArrowUpRight, TriangleAlert } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { RootState, AppDispatch } from "@/lib/store";
import { fetchData } from "@/lib/reducers/data-slice";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CategoryCard,
  CategoryCardSkeleton,
} from "@/components/card/category-card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData({ endpoint: "home/categories", key: "categories" }));
    }
  }, [status, dispatch]);

  return (
    <div className="py-10 container mx-auto">
      <Heading title="Rehlatiuae Categories">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href="/categories">
            see all <ArrowUpRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </Heading>
      {status === "failed" && (
        <div className="h-[200px] flex justify-center items-center">
          <p className="text-muted-foreground flex items-center">
            <TriangleAlert className="h-5 w-5 mr-2" />
            No result
          </p>
        </div>
      )}
      {status === "loading" && (
        <div className="mt-10 flex items-center justify-start gap-5 overflow-x-hidden">
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
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
            {data.map(({ id, name, description, imagePath }) => (
              <CarouselItem
                key={id}
                className="relative basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 3xl:basis-1/6  h-[250px] group flex justify-center items-end"
              >
                <CategoryCard
                  imagePath={imagePath}
                  name={name}
                  description={description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};
