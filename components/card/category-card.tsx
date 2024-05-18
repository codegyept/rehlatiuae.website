import Image, { StaticImageData } from "next/image";
import { CarouselItem } from "@/components/ui/carousel";

interface CategoryCardProps {
  alt: string;
  src: string | StaticImageData;
  label: string;
}

export const CategoryCard = ({ alt, src, label }: CategoryCardProps) => {
  return (
    <CarouselItem className="relative md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 3xl:basis-1/6  h-[250px] group flex justify-center items-end">
      <Image
        alt={alt}
        src={src}
        fill
        className="object-contain group-hover:-translate-y-6 cursor-pointer scale-75 group-hover:scale-105 duration-300 ease-in-out"
      />
      <p>{label}</p>
    </CarouselItem>
  );
};
