import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeadingCarouselProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  hrefButton: string;
  labelButton: string;
}

export const HeadingCarousel = ({
  title,
  hrefButton,
  labelButton,
  className,
  ...props
}: HeadingCarouselProps) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center gap-x-5 py-3",
        className
      )}
      {...props}
    >
      <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider">
        {title}
      </h3>
      <Button className="tracking-wider px-0" variant="link" asChild>
        <Link href={hrefButton}>
          {labelButton} <ArrowUpRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};
