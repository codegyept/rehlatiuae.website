import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { BestTrip } from "@/interface";

interface BestTripCardProps {
  data: BestTrip;
}

export const BestTripCard = ({ data }: BestTripCardProps) => {
  return (
    <Card className="overflow-hidden shadow-sm">
      <CardHeader className="p-0 relative">
        {data.images.length < 1 ? (
          <Image
            src={data.imagePath}
            alt={data.name}
            width={1000}
            height={1000}
            className="object-cover h-[250px] w-full"
            onError={(e) => {
              e.currentTarget.src = "/image-error.jpg";
            }}
          />
        ) : (
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={data.imagePath}
                  alt={data.name}
                  width={1000}
                  height={1000}
                  className="object-cover h-[250px] w-full"
                  onError={(e) => {
                    e.currentTarget.src = "/image-error.jpg";
                  }}
                />
              </CarouselItem>
              {data.images.map(({ id, imagePath }) => (
                <CarouselItem key={id}>
                  <Image
                    src={imagePath}
                    alt={`${data.name}-${id}`}
                    width={1000}
                    height={1000}
                    className="object-cover h-[250px] w-full"
                    onError={(e) => {
                      e.currentTarget.src = "/image-error.jpg";
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[50%] translate-y-[-50%] z-10 left-4" />
            <CarouselNext className="absolute top-[50%] translate-y-[-50%] z-10 right-4" />
          </Carousel>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg truncate">{data.name}</h3>
          <p className="text-sm whitespace-nowrap">{data.oldPrice}$ / person</p>
        </div>
        <p className="text-sm text-muted-foreground truncate">
          {data.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <div className="flex items-center gap-x-2">
          <span className="line-through text-muted-foreground text-sm">
            {data.beforePrice}$
          </span>
          <Badge className="bg-green px-2 py-1">Save {data.saving}%</Badge>
        </div>
        <Button size="sm">Book now</Button>
      </CardFooter>
    </Card>
  );
};
