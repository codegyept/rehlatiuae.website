interface SkeletonCarouselProps {
  SkeletonComponent: React.ComponentType<{ className?: string }>;
}

export const SkeletonCarousel = ({
  SkeletonComponent,
}: SkeletonCarouselProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <SkeletonComponent className="" />
      <SkeletonComponent className="hidden md:block" />
      <SkeletonComponent className="hidden md:hidden lg:block" />
      <SkeletonComponent className="hidden md:hidden lg:hidden xl:block" />
    </div>
  );
};
