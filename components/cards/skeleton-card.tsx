import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonCardProps extends React.HTMLAttributes<HTMLElement> {}

export const SkeletonCard = ({ className }: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-md shadow-sm overflow-hidden",
        className
      )}
    >
      <div className="h-[250px]">
        <Skeleton className="h-full w-full object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between mb-2 gap-x-4">
          <Skeleton className="h-[24px] w-3/4 rounded-md" />
          <Skeleton className="h-[18px] w-1/4 rounded-md" />
        </div>
        <Skeleton className="h-[18px] w-full rounded-md" />
        <Skeleton className="h-[18px] w-2/3 rounded-md" />
      </div>
      <div className="flex justify-between items-center p-4 gap-x-4">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-[18px] w-16 rounded-md" />
          <Skeleton className="h-[24px] w-12 rounded-full" />
        </div>
        <Skeleton className="h-[32px] w-20 rounded-md" />
      </div>
    </div>
  );
};
