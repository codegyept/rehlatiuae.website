"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { fetchData } from "@/lib/reducers/data-slice";

import {
  BestOffersTrips,
  BestTrips,
  Blogs,
  Categories,
  ContactUs,
  Hero,
  Partners,
  PopularExperiences,
  Services,
  TopDestinations,
  WhyChooseUs,
} from "@/components/sections";

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
      <Blogs />
      <Partners />
      <ContactUs />
    </main>
  );
}
