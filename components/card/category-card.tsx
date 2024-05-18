import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  alt: string;
  src: string | StaticImageData;
  label: string;
}

export const CategoryCard = ({ alt, src, label }: CategoryCardProps) => {
  return (
    <>
      <Image
        alt={alt}
        src={src}
        fill
        className="object-contain group-hover:-translate-y-6 cursor-pointer scale-75 group-hover:scale-105 duration-300 ease-in-out"
      />
      <p>{label}</p>
    </>
  );
};
