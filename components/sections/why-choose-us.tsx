import Image from "next/image";
import whyChooseUs from "@/public/why-choose-us.jpg";

import { features } from "@/config/site";
import { FeatureCard } from "@/components/cards/feature-card";

export const WhyChooseUs = () => {
  return (
    <section className="py-20 container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
        <div>
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Us?
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We will confidently explain it to you with complete confidence and
              excellence!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ id, title, icon, description }) => (
              <FeatureCard
                key={id}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-md lg:max-w-[550px] h-[400px] lg:h-[600px]">
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform lg:hover:scale-110 lg:rotate-12 hover:rotate-0">
            <Image
              src={whyChooseUs}
              alt="Why Choose Us"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
