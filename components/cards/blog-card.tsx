import Link from "next/link";
import Image from "next/image";

import { Blog } from "@/interface";
import { ArrowUpRight, Eye } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogCardProps {
  data: Blog;
}

export const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative p-0 overflow-hidden h-[300px]">
        <Image
          src={data.imagePath}
          alt={data.name}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src = "/image-error.jpg";
          }}
        />
        <div className="hover:bg-black/20 transition-all absolute bottom-0 left-0 w-full h-full" />
      </CardHeader>
      <CardContent className="py-5 space-y-3">
        <h3 className="text-lg font-semibold tracking-wider">{data.name}</h3>
        <p className="text-sm text-muted-foreground tracking-wider truncate">
          {data.description}
        </p>
      </CardContent>
      <CardFooter className="pb-2 flex justify-between items-center">
        <Button asChild variant="ghost" size="sm">
          <Link href={data.name}>
            {data.reviewAverage} <Eye className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        <Button asChild variant="link" size="sm">
          <Link href={data.name}>
            Read more <ArrowUpRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const BlogCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative p-0 overflow-hidden h-[300px]">
        <Skeleton className="w-full h-full" />
      </CardHeader>
      <CardContent className="py-5 space-y-3">
        <Skeleton className="w-3/4 h-6 mb-2" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-2/3 h-4" />
      </CardContent>
      <CardFooter className="pb-2 flex justify-between items-center">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-6 w-16" />
      </CardFooter>
    </Card>
  );
};
