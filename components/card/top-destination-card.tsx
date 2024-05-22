import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface TopDestinationCardProps {
  name: string;
  description: string;
  imagePath: string | StaticImageData;
  country: string;
}

export const TopDestinationCard = ({
  imagePath,
  name,
  description,
  country,
}: TopDestinationCardProps) => {
  return (
    <Card className="overflow-hidden">
      <Image
        alt={name}
        src={imagePath}
        width={4000}
        height={4000}
        className="object-cover w-full h-full"
      />
      <CardContent className="pt-5">
        <h3 className="tracking-wide">{name}</h3>
        <p className="text-muted-foreground text-sm">{country}</p>
      </CardContent>
    </Card>
  );
};

export const TopDestinationCardSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[250px] rounded-md" />
      <Skeleton className="h-[18px] rounded-md" />
      <Skeleton className="w-2/3 h-[18px] rounded-md" />
    </div>
  );
};
