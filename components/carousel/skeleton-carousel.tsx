interface SkeletonCarouselProps {
  SkeletonComponent: React.ComponentType;
}

export const SkeletonCarousel = ({
  SkeletonComponent,
}: SkeletonCarouselProps) => {
  return (
    <div className="mt-10 grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </div>
  );
};
