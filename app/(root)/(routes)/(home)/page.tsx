"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/lib/store";
import { fetchData } from "@/lib/reducers/data-slice";

import { Hero } from "./_components/hero";
import { Categories } from "./_components/categories";
import { TopDestinations } from "./_components/top-destinations";
import { BestOffersTrips } from "./_components/best-offers-trips";
import { BestTrips } from "./_components/best-trips";
import { PopularExperiences } from "./_components/popular-experiences";
import { WhyChooseUs } from "./_components/why-choose-us";
import { Services } from "./_components/services";

export default function PageHome() {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData("home"));
    }
  }, [status, dispatch]);

  return (
    <main>
      <Hero />
      <Categories />
      <TopDestinations />
      <BestOffersTrips />
      <BestTrips />
      <PopularExperiences />
      <WhyChooseUs />
      <Services />
    </main>
  );
}
