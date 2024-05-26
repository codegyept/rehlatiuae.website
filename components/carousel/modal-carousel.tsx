"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import type { EmblaOptionsType } from "embla-carousel";

interface ModalCarouselProps {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  loop?: boolean;
  delay?: number;
  duration?: number;
}

export const ModalCarousel = ({
  children,
  align = "start",
  loop = true,
  delay = 3000,
  duration,
}: ModalCarouselProps) => {
  const carouselOptions: EmblaOptionsType = {
    align,
    loop,
    duration,
  };

  const autoplayOptions = Autoplay({
    delay,
  });

  return (
    <div className="mt-5 w-full">
      <Carousel
        opts={carouselOptions}
        plugins={[autoplayOptions]}
        aria-roledescription="carousel"
        role="region"
        aria-label="Image carousel"
      >
        <CarouselContent>{children}</CarouselContent>
      </Carousel>
    </div>
  );
};
