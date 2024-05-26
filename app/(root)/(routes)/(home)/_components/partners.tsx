"use client";

import { Key } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import {
  PartnerCard,
  PartnerCardSkeleton,
} from "@/components/card/partner-card";
import { CarouselItem } from "@/components/ui/carousel";
import { HeadingCarousel } from "@/components/carousel/heading-carousel";
import { ModalCarousel } from "@/components/carousel/modal-carousel";

import { Partner } from "@/interface";

export const Partners = () => {
  const { data, status } = useSelector((state: RootState) => state.data);

  let content;

  switch (status) {
    case "loading":
      content = (
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <PartnerCardSkeleton />
          <PartnerCardSkeleton />
          <PartnerCardSkeleton className="hidden md:block " />
          <PartnerCardSkeleton className="hidden md:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
        </div>
      );
      break;
    case "failed":
      content = (
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          <PartnerCardSkeleton />
          <PartnerCardSkeleton />
          <PartnerCardSkeleton className="hidden md:block " />
          <PartnerCardSkeleton className="hidden md:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
          <PartnerCardSkeleton className="hidden lg:block" />
        </div>
      );
      break;
    case "succeeded":
      content = (
        <ModalCarousel delay={0} duration={8000}>
          {data?.data?.ourPartners?.map((data: Partner, index: Key) => (
            <CarouselItem
              key={index}
              className="relative basis-1/2 md:basis-1/4 lg:basis-1/6 cursor-pointer"
            >
              <PartnerCard data={data} />
            </CarouselItem>
          ))}
        </ModalCarousel>
      );
      break;
    default:
      content = null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <HeadingCarousel
          title="Our Partners"
          hrefButton="/partners"
          labelButton="See All"
        />
      </div>
      {content}
    </section>
  );
};

// "use client";

// import { Key } from "react";
// import { RootState } from "@/lib/store";
// import { useSelector } from "react-redux";

// import { BestTripCard } from "@/components/card/best-trip-card";
// import { SkeletonCard } from "@/components/card/skeleton-card";
// import { SectionCarousel } from "@/components/carousel/section-carousel";
// import { CarouselItem } from "@/components/ui/carousel";

// import { BestTrip } from "@/interface";

// export const Partners = () => {
//   const { data, status } = useSelector((state: RootState) => state.data);

//   return (
//     <SectionCarousel
//       title="Our Partners"
//       href="/partners"
//       label="See All"
//       status={status}
//       componentSkeleton={SkeletonCard}
//     >
//       {data?.data?.ourPartners?.map((data: BestTrip, index: Key) => (
//         <CarouselItem
//           key={index}
//           className="relative basis-1/2 md:basis-1/4 lg:basis-1/6 cursor-pointer"
//         >
//           <BestTripCard data={data} />
//         </CarouselItem>
//       ))}
//     </SectionCarousel>
//   );
// };

// // "use client";

// // import Link from "next/link";
// // import Autoplay from "embla-carousel-autoplay";

// // import { RootState } from "@/lib/store";
// // import { useSelector } from "react-redux";
// // import { ArrowUpRight, TriangleAlert } from "lucide-react";

// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// // } from "@/components/ui/carousel";
// // import {
// //   PartnerCard,
// //   PartnerCardSkeleton,
// // } from "@/components/card/partner-card";
// // import { Button } from "@/components/ui/button";
// // import { Heading } from "@/components/ui/heading";

// // interface Partner {
// //   id: number;
// //   name: string;
// //   description: string;
// //   imagePath: string;
// //   country: string;
// // }

// // export const Partners = () => {
// //   const { data, status } = useSelector((state: RootState) => state.data);

// //   return (
// //     <>
// //       <div className="py-10 container mx-auto">
// //         <Heading title="Our Partners">
// //           <Button className="px-0 tracking-wide" variant="link" asChild>
// //             <Link href="/partners">
// //               see all <ArrowUpRight className="h-5 w-5 ml-2" />
// //             </Link>
// //           </Button>
// //         </Heading>
// //         {status === "loading" && (
// //           <div className="mt-10 grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5">
// //             <PartnerCardSkeleton />
// //             <PartnerCardSkeleton />
// //             <PartnerCardSkeleton />
// //             <PartnerCardSkeleton />
// //             <PartnerCardSkeleton />
// //             <PartnerCardSkeleton />
// //           </div>
// //         )}
// //         {status === "failed" && (
// //           <div className="h-[200px] flex justify-center items-center">
// //             <p className="text-muted-foreground flex items-center">
// //               <TriangleAlert className="h-5 w-5 mr-2" />
// //               No result
// //             </p>
// //           </div>
// //         )}
// //       </div>

// //       {status === "succeeded" && (
// //         <Carousel
// //           className="mt-10"
// //           opts={{
// //             align: "start",
// //             loop: true,
// //             duration: 5000,
// //           }}
// //           plugins={[
// //             Autoplay({
// //               delay: 500,
// //             }),
// //           ]}
// //         >
//   <CarouselContent>
//     {data?.data?.ourPartners.map(
//       ({ id, name, description, imagePath }: Partner) => (
//         <CarouselItem
//           key={id}
//           className="relative basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 3xl:basis-1/6  h-[250px] group flex justify-center items-end"
//         >
//           <PartnerCard
//             imagePath={imagePath}
//             name={name}
//             description={description}
//           />
//         </CarouselItem>
//       )
//     )}
//   </CarouselContent>
// </Carousel>
// //       )}
// //     </>
// //   );
// // };
