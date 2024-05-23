import Image from "next/image";
import Link from "next/link";

import appStore from "@/public/app-store.png";
import googlePlay from "@/public/google-play.png";
import icon from "@/public/icon.svg";
import { links } from "@/config/site";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="py-10 pt-40 container mx-auto space-y-10">
      <div className="flex flex-col justify-center items-center gap-y-3 text-center max-w-3xl mx-auto mb-20">
        <Image src={icon} alt="Logo" width={200} height={100} />
        <p className="text-sm leading-8">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {links.map(({ title, children }, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-y-2"
          >
            <h3 className="font-semibold text-lg">{title}</h3>
            <ul className="flex flex-col justify-start items-start">
              {children.map(({ label, url }, index) => (
                <Button variant="link" key={index} asChild className="px-0">
                  <Link href={url}>{label}</Link>
                </Button>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex justify-start flex-col lg:flex-row items-start lg:items-center h-fit gap-y-5">
          <Link href="/">
            <Image
              src={appStore}
              alt="App store"
              className="w-[100px] h-[35px] object-contain"
            />
          </Link>
          <Link href="/">
            <Image
              src={googlePlay}
              alt="App store"
              className="w-[100px] h-[35px] object-contain"
            />
          </Link>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <p className="text-xs md:text-sm text-center leading-8">
          Copyright ©2024 All Rights Reserved. — Rehlatiuae.
        </p>
        <div className="flex items-center justify-center">
          <Button asChild variant="link" size="sm" className="text-xs">
            <Link href="/">Terms & Conditions</Link>
          </Button>
          <Button asChild variant="link" size="sm" className="text-xs">
            <Link href="/">Privacy & Policy</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
