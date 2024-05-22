import Image from "next/image";
import whyChooseUs from "@/public/why-choose-us.jpg";

import { features } from "@/config/site";
import { FeatureCard } from "@/components/card/feature-card";

export const WhyChooseUs = () => {
  return (
    <div className="py-10 container mx-auto">
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="text-lg md:text-xl lg:text-2xl tracking-wider flex-1">
          Why Choose Us?
        </h1>
        <p className="tracking-wide text-sm text-muted-foreground leading-8">
          We will confidently explain it to you with complete confidence and
          excellence!
        </p>
      </div>
      <div className="mt-10 flex items-start justify-between gap-10 flex-col lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map(({ id, title, icon, description }) => (
            <FeatureCard
              key={id}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
        <div className="w-full lg:max-w-[550px] h-[600px] lg:h-full">
          <Image
            src={whyChooseUs}
            alt="Why Choose Us"
            className="hidden lg:block w-full h-full object-cover rotate-6 hover:rotate-0 duration-300 ease-in-out cursor-pointer scale-90 hover:scale-105 hover:shadow-lg rounded-3xl"
          />
          <Image
            src={whyChooseUs}
            alt="Why Choose Us"
            className="block lg:hidden w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
