import { categories } from "@/config/site";

import { CategoryCard } from "@/components/card/category-card";
import { CarouselSection } from "@/components/common/carousel-section";

export const Categories = () => {
  return (
    <CarouselSection href="/categories">
      {categories.map(({ src, alt, label }, index) => (
        <CategoryCard key={index} src={src} alt={alt} label={label} />
      ))}
    </CarouselSection>
  );
};
