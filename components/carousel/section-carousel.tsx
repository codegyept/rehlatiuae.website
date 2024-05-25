import { HeadingCarousel } from "@/components/carousel/heading-carousel";
import { SkeletonCarousel } from "@/components/carousel/skeleton-carousel";
import { ModalCarousel } from "@/components/carousel/modal-carousel";

interface SectionCarouselProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  href: string;
  label: string;
  status: "loading" | "failed" | "idle" | "succeeded";
  children: React.ReactNode;
  componentSkeleton: React.ComponentType;
}

export const SectionCarousel = ({
  title,
  href,
  label,
  status,
  children,
  componentSkeleton: ComponentSkeleton,
  ...props
}: SectionCarouselProps) => {
  let content;

  switch (status) {
    case "loading":
      content = <SkeletonCarousel SkeletonComponent={ComponentSkeleton} />;
      break;
    case "failed":
      content = <SkeletonCarousel SkeletonComponent={ComponentSkeleton} />;
      break;
    case "succeeded":
      content = <ModalCarousel>{children}</ModalCarousel>;
      break;
    default:
      content = null;
  }

  return (
    <section className="py-20 container mx-auto" {...props}>
      <HeadingCarousel title={title} hrefButton={href} labelButton={label} />
      {content}
    </section>
  );
};
