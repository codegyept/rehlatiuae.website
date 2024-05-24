import Image from "next/image";
import service from "@/public/service.png";

import { services } from "@/config/site";
import { ServiceCard } from "@/components/card/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Services = () => {
  return (
    <div className="py-10 container mx-auto overflow-x-hidden">
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
      <div className="mt-10 flex items-start justify-between gap-y-10 gap-x-20 flex-col xl:flex-row">
        <Image
          src={service}
          alt="Why Choose Us"
          className="object-contain w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] mx-auto"
        />
        <div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ id, title, description }) => (
              <ServiceCard key={id} title={title} description={description} />
            ))}
          </div>
          <Button asChild>
            <Link href="/explore">
              Explore more <ArrowUpRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
