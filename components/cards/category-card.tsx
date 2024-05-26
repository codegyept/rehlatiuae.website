import Image from "next/image";
import { Category } from "@/interface";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  data: Category;
}

export const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <Card className="border-none shadow-none w-fit text-center flex flex-col justify-center items-center group">
      <Image
        src={data.imagePath}
        alt={data.name}
        width={1000}
        height={1000}
        className="object-contain group-hover:-translate-y-4 cursor-pointer scale-75 group-hover:scale-105 duration-300 ease-in-out"
        onError={(e) => {
          e.currentTarget.src = "/image-error.jpg";
        }}
      />
      <CardContent>
        <p className="tracking-wider">{data.name}</p>
      </CardContent>
    </Card>
  );
};

interface CategoryCardSkeletonProps extends React.HTMLAttributes<HTMLElement> {}

export const CategoryCardSkeleton = ({
  className,
}: CategoryCardSkeletonProps) => {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-lg shadow-sm overflow-hidden",
        className
      )}
    >
      <div className="h-[250px]">
        <Skeleton className="h-full w-full object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4 rounded-md mx-auto" />
      </div>
    </div>
  );
};
