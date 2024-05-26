import Image from "next/image";
import { TopDestination } from "@/interface";
import { Card, CardContent } from "@/components/ui/card";

interface TopDestinationCardProps {
  data: TopDestination;
}

export const TopDestinationCard = ({ data }: TopDestinationCardProps) => {
  return (
    <Card>
      <Image
        src={data.imagePath}
        alt={data.name}
        width={1000}
        height={1000}
        className="object-cover"
        onError={(e) => {
          e.currentTarget.src = "/image-error.jpg";
        }}
      />
      <CardContent className="py-4 space-y-2">
        <h3 className="font-semibold text-lg truncate">{data.name}</h3>
        <p className="text-sm text-muted-foreground truncate">{data.country}</p>
      </CardContent>
    </Card>
  );
};
