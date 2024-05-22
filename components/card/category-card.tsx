import Image, { StaticImageData } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryCardProps {
  name: string;
  imagePath: string | StaticImageData;
  description: string;
}

export const CategoryCard = ({
  name,
  imagePath,
  description,
}: CategoryCardProps) => {
  return (
    <>
      <Image
        alt={name}
        src={imagePath}
        fill
        sizes="100"
        className="object-contain group-hover:-translate-y-6 cursor-pointer scale-75 group-hover:scale-105 duration-300 ease-in-out"
      />
      <span className="sr-only">{description}</span>
      <p>{name}</p>
    </>
  );
};

export const CategoryCardSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="w-[200px] h-[250px] rounded-md" />
      <Skeleton className="w-[200px] h-[18px] rounded-md" />
      <Skeleton className="w-[120px] h-[18px] rounded-md" />
    </div>
  );
};
