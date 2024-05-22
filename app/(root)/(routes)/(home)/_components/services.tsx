import Image from "next/image";
import service1 from "@/public/service1.jpg";
import service2 from "@/public/service2.jpg";
import service3 from "@/public/service3.jpg";

import { services } from "@/config/site";
import { ServiceCard } from "@/components/card/service-card";

export const Services = () => {
  return (
    <div className="py-10 container mx-auto">
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="text-lg md:text-xl lg:text-2xl tracking-wider flex-1">
          We Help You Make Best Trip
        </h1>
        <p className="tracking-wide text-sm text-muted-foreground leading-8">
          When we say that all the events that we choose are very exciting
          events because we have a specialized team that lives the experience
          and evaluates all the events with the utmost precision, as we at
          Rehlatiuae select the best and most exciting events so that they serve
          as a unique souvenir value.
        </p>
      </div>
      <div className="mt-10 flex items-start justify-between gap-y-40 gap-x-56 flex-col xl:flex-row">
        <div className="w-[500px] h-[500px] relative z-10">
          <Image
            src={service1}
            alt="Why Choose Us"
            className="object-cover rounded-3xl absolute top-0 left-0 w-full h-full z-20"
          />
          <Image
            src={service2}
            alt="Why Choose Us"
            className="object-cover rounded-3xl absolute top-[20px] left-[450px] w-1/2 h-1/2 z-30"
          />
          <Image
            src={service3}
            alt="Why Choose Us"
            className="object-cover rounded-3xl absolute top-[300px] left-[250px] w-2/3 h-2/3 z-30"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(({ id, title, description }) => (
            <ServiceCard key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
