import { Car, Repeat, ShoppingBag, Target } from "lucide-react";

import banner1 from "@/public/banners/banner(1).jpg";
import banner2 from "@/public/banners/banner(2).jpg";
import banner3 from "@/public/banners/banner(3).jpg";

import cat1 from "@/public/categories/cat1.png";
import cat2 from "@/public/categories/cat2.png";
import cat3 from "@/public/categories/cat3.png";
import cat4 from "@/public/categories/cat4.png";
import cat5 from "@/public/categories/cat5.png";
import cat6 from "@/public/categories/cat6.png";
import cat7 from "@/public/categories/cat7.png";
import cat8 from "@/public/categories/cat8.png";
import cat9 from "@/public/categories/cat9.png";
import cat10 from "@/public/categories/cat10.png";
import cat11 from "@/public/categories/cat11.png";
import cat12 from "@/public/categories/cat12.png";

import img1 from "@/public/topDestinations/img1.jpg";
import img2 from "@/public/topDestinations/img2.jpg";
import img3 from "@/public/topDestinations/img3.jpg";

export const siteConfig = {
  name: "Rehlatiuae",
  description: "Rehlatiuae",
};

export const routes = [
  {
    label: "home",
    href: "/",
    pathname: "/",
  },
  {
    label: "explore",
    href: "/explore",
    pathname: "/explore",
  },
  {
    label: "contact us",
    href: "/contact-us",
    pathname: "/contact-us",
  },
];

export const banners = [
  {
    alt: "banner-01",
    src: banner1,
  },
  {
    alt: "banner-02",
    src: banner2,
  },
  {
    alt: "banner-03",
    src: banner3,
  },
];
export const categories = [
  {
    alt: "cat-01",
    src: cat1,
    label: "Food & Drinks",
  },
  {
    alt: "cat-02",
    src: cat2,
    label: "Wellness",
  },
  {
    alt: "cat-03",
    src: cat3,
    label: "Nature & Wildfire",
  },
  {
    alt: "cat-04",
    src: cat4,
    label: "Water Activities",
  },
  {
    alt: "cat-05",
    src: cat5,
    label: "Connectivity",
  },
  {
    alt: "cat-06",
    src: cat6,
    label: "Adventure",
  },
  {
    alt: "cat-07",
    src: cat7,
    label: "Brenna Roy",
  },
  {
    alt: "cat-08",
    src: cat8,
    label: "Roadmap",
  },
  {
    alt: "cat-09",
    src: cat9,
    label: "Tickets",
  },
  {
    alt: "cat-10",
    src: cat10,
    label: "Aerial Sightseeing",
  },
  {
    alt: "cat-11",
    src: cat11,
    label: "Cruises",
  },
  {
    alt: "cat-12",
    src: cat12,
    label: "Transportation",
  },
];

export const topDestinations = [
  {
    src: img1,
    label: "Dubai",
  },
  {
    src: img2,
    label: "Abu Dhabi",
  },
  {
    src: img3,
    label: "Ras Al Khaimah",
  },
  {
    src: img3,
    label: "Ras Al Khaimah",
  },
  {
    src: img1,
    label: "Dubai",
  },
  {
    src: img2,
    label: "Abu Dhabi",
  },
  {
    src: img3,
    label: "Ras Al Khaimah",
  },
];

export const features = [
  {
    id: 0,
    title: "Only the finest",
    icon: Car,
    description:
      "At Rehlatiuae, you only find the best. We do the hard work so you don’t have to.",
  },
  {
    id: 1,
    title: "Greed is good",
    icon: ShoppingBag,
    description:
      "With quality, you also get lowest prices, last-minute availability and 24x7 support.",
  },
  {
    id: 2,
    title: "Experience every flavour",
    icon: Target,
    description:
      "Offbeat or mainstream, a tour or a show, a game or a museum - we have ‘em all.",
  },
  {
    id: 3,
    title: "No pain, only gain",
    icon: Repeat,
    description:
      "Didn't love it? We'll save you your money. Not cocky, just confident.",
  },
];

export const services = [
  {
    id: 0,
    title: "Trust",
    description:
      "We visit places periodically and make sure that all places are as we describe them in our descriptions.",
  },
  {
    id: 1,
    title: "Safety",
    description:
      "We at Rehlatiuae do regular follow-up and conduct some experiments to ensure that all areas are safe for you and your family. We have plans to ensure the best places for you and your family.",
  },
  {
    id: 2,
    title: "Quick booking",
    description:
      "In just a few steps you will be able to book all the exciting events for you and your family and you can also share the fun with them.",
  },
  {
    id: 3,
    title: "Save money",
    description:
      "We at Rahlatyuae offer many discounts and many events at the most reasonable prices at very competitive prices.",
  },
];

export const links = [
  {
    title: "Destinations",
    children: [
      {
        label: "Dubai",
        url: "/",
      },
      {
        label: "Abu Dhabi",
        url: "/",
      },
      {
        label: "Ras Al Khaima",
        url: "/",
      },
      {
        label: "Contact us",
        url: "/",
      },
    ],
  },
  {
    title: "Useful",
    children: [
      {
        label: "About Us",
        url: "/",
      },
      {
        label: "Rehlatiuae Story",
        url: "/",
      },
    ],
  },
  {
    title: "Other",
    children: [
      {
        label: "Privacy & Policy",
        url: "/",
      },
      {
        label: "Terms of use",
        url: "/",
      },
      {
        label: "Rehlatiuae Blog",
        url: "/",
      },
      {
        label: "Our Team",
        url: "/",
      },
    ],
  },
];
