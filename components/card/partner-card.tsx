import Image, { StaticImageData } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface PartnerCardProps {
  name: string;
  imagePath: string | StaticImageData;
  description: string;
}

export const PartnerCard = ({
  name,
  imagePath,
  description,
}: PartnerCardProps) => {
  return (
    <>
      <Image
        alt={name}
        src={imagePath}
        fill
        sizes="100"
        className="object-contain cursor-pointer"
      />
      <span className="sr-only">{description}</span>
    </>
  );
};

export const PartnerCardSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="w-[200px] h-[250px] rounded-md" />
      <Skeleton className="w-[200px] h-[18px] rounded-md" />
      <Skeleton className="w-[120px] h-[18px] rounded-md" />
    </div>
  );
};
