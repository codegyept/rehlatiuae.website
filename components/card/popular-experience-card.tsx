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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import { PopularExperience } from "@/interface";

interface PopularExperienceCardProps {
  data: PopularExperience;
}

export const PopularExperienceCard = ({ data }: PopularExperienceCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0 relative">
        {data.images.length < 1 ? (
          <Image
            src={data.imagePath}
            alt={data.name}
            width={1000}
            height={1000}
            className="object-cover h-[200px] w-full"
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
                  className="object-cover h-[200px] w-full"
                />
              </CarouselItem>
              {data.images.map(({ id, imagePath }) => (
                <CarouselItem key={id}>
                  <Image
                    src={imagePath}
                    alt={`${data.name}-${id}`}
                    width={1000}
                    height={1000}
                    className="object-cover h-[200px] w-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[50%] translate-y-[-50%] z-10 left-4" />
            <CarouselNext className="absolute top-[50%] translate-y-[-50%] z-10 right-4" />
          </Carousel>
        )}
      </CardHeader>
      <CardContent className="py-5">
        <div className="flex items-center justify-between gap-x-2">
          <h3 className="tracking-wide">{data.name}</h3>
          <p className="text-sm text-green text-nowrap text-muted-foreground">
            Price {data.childPrice}$
          </p>
        </div>
        <p className="truncate text-sm text-muted-foreground">
          {data.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge className="bg-green">Save {data.saving}%</Badge>
        <Button size="sm">Book now</Button>
      </CardFooter>
    </Card>
  );
};

export const PopularExperienceCardSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[250px] rounded-md" />
      <Skeleton className="h-[18px] rounded-md" />
      <Skeleton className="w-2/3 h-[18px] rounded-md" />
    </div>
  );
};
