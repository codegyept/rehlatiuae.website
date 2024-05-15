import banner1 from "@/public/banners/banner(1).jpg";
import banner2 from "@/public/banners/banner(2).jpg";
import banner3 from "@/public/banners/banner(3).jpg";

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
