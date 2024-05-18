import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TopDestinationCardProps {
  src: string | StaticImageData;
  label: string;
}

export const TopDestinationCard = ({ src, label }: TopDestinationCardProps) => {
  return (
    <Card className="overflow-hidden">
      <Image alt={label} src={src} className="object-cover w-full h-full" />
      <CardContent className="pt-5">
        <p className="tracking-wide">{label}</p>
      </CardContent>
    </Card>
  );
};
