import Image from "next/image";
import { Partner } from "@/interface";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PartnerCardProps {
  data: Partner;
}

export const PartnerCard = ({ data }: PartnerCardProps) => {
  return (
    <Card className="border-none shadow-none w-[100px] md:w[250px] mx-auto">
      <Image
        src={data.imagePath}
        alt={data.name}
        width={1000}
        height={1000}
        className="object-contain"
        onError={(e) => {
          e.currentTarget.src = "/image-error.jpg";
        }}
      />
    </Card>
  );
};

interface PartnerCardSkeletonProps extends React.HTMLAttributes<HTMLElement> {}

export const PartnerCardSkeleton = ({
  className,
}: PartnerCardSkeletonProps) => {
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
    </div>
  );
};
