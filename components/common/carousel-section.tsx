"use client";

import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

interface CarouselSectionProps {
  align?: "start" | "center" | "end";
  loop?: boolean;
  delay?: number;
  href: string;
  label?: string;
  children: React.ReactNode;
}

export const CarouselSection = ({
  align = "start",
  loop = true,
  delay = 3000,
  href,
  label = "View all",
  children,
}: CarouselSectionProps) => {
  return (
    <div className="py-10">
      <Heading title="Rehlatiuae Categories">
        <Button className="px-0 tracking-wide" variant="link" asChild>
          <Link href={href}>
            {label} <ArrowUpRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </Heading>
      <Carousel
        opts={{
          align: align,
          loop: loop,
        }}
        plugins={[
          Autoplay({
            delay: delay,
          }),
        ]}
      >
        <CarouselContent>{children}</CarouselContent>
      </Carousel>
    </div>
  );
};
