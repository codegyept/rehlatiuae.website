import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import service from "@/public/service.png";
import { services } from "@/config/site";

import { ServiceCard } from "@/components/card/service-card";
import { Button } from "@/components/ui/button";

export const Services = () => {
  return (
    <section className="py-20 container mx-auto">
      <div className="w-full flex flex-col gap-y-6 md:gap-y-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          We Help You Make Best Trip
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-7">
          When we say that all the events that we choose are very exciting
          events because we have a specialized team that lives the experience
          and evaluates all the events with the utmost precision, as we at
          Rehlatiuae select the best and most exciting events so that they serve
          as a unique souvenir value.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className="w-full md:w-[40%]">
          <Image
            src={service}
            alt="service"
            className="object-cover rounded-lg"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div className="w-full md:w-[60%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ id, title, description }) => (
              <ServiceCard key={id} title={title} description={description} />
            ))}
          </div>
          <Button className="mt-6 md:mt-8" asChild>
            <Link href="/explore">
              Explore more <ArrowUpRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
