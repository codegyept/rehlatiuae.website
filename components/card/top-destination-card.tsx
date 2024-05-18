import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
