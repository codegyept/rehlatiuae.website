import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  name: string;
  imagePath: string | StaticImageData;
  description: string;
}

export const CategoryCard = ({
  name,
  imagePath,
  description,
}: CategoryCardProps) => {
  return (
    <>
      <Image
        alt={name}
        src={imagePath}
        fill
        className="object-contain group-hover:-translate-y-6 cursor-pointer scale-75 group-hover:scale-105 duration-300 ease-in-out"
      />
      <p>{name}</p>
    </>
  );
};
