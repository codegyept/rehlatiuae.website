import { Hero } from "./_components/hero";
import { Categories } from "./_components/categories";
import { TopDestinations } from "./_components/top-destinations";

export default function PageHome() {
  return (
    <div>
      <Hero />
      <Categories />
      <TopDestinations />
      <div className="h-[900px] w-full"></div>
    </div>
  );
}
