import axios from "@/lib/axios";

import { Hero } from "./_components/hero";
import { Categories } from "./_components/categories";
import { TopDestinations } from "./_components/top-destinations";
import { BestOffersTrips } from "./_components/best-offers-trips";

export default async function PageHome() {
  const res = await axios.get("home");

  return (
    <div>
      <Hero />
      <Categories />
      <TopDestinations data={res.data.data.topDestinations} />
      <BestOffersTrips data={res.data.data.bestOffers} />
    </div>
  );
}
