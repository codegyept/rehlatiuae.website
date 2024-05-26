"use client";

import Link from "next/link";
import { Menu, ShoppingCart, User } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { SwitcherLanguages } from "@/components/ui/switcher-languages";

import { cn } from "@/lib/utils";
import { routes } from "@/config/site";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const Navbar = () => {
  const { isScrolled } = useScrollTop(300);

  return (
    <div
      className={cn(
        "fixed top-0 z-20 w-full h-14 bg-transparent flex justify-between items-center  transition-all",
        isScrolled && "bg-background h-20 shadow-xl"
      )}
    >
      <div className="flex items-center justify-between container">
        <Logo className="h-10 w-[140px]" />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {routes.map(({ label, href }, index) => (
              <NavigationMenuItem key={index}>
                <Button asChild variant={isScrolled ? "ghost" : "link"}>
                  <Link
                    href={href}
                    passHref
                    className={cn(
                      "capitalize text-white",
                      isScrolled && "text-primary"
                    )}
                  >
                    {label}
                  </Link>
                </Button>
              </NavigationMenuItem>
            ))}

            <Button size="icon" variant="link" asChild>
              <Link
                href="/auth/login"
                className={cn(
                  "capitalize text-white",
                  isScrolled && "text-primary"
                )}
              >
                <span className="sr-only">Login</span>
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="link" asChild>
              <Link
                href="/cart"
                className={cn(
                  "capitalize text-white",
                  isScrolled && "text-primary"
                )}
              >
                <span className="sr-only">ShoppingCart</span>
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <SwitcherLanguages />
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <Button
            size="icon"
            variant={isScrolled ? "outline" : "ghost"}
            asChild
            className={cn("text-white", isScrolled && "text-primary")}
          >
            <SheetTrigger className="block md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
          </Button>
          <SheetContent>
            <NavigationMenu className="flex flex-col justify-between h-full items-start">
              <NavigationMenuList className="flex-col space-x-0 items-start space-y-2">
                {routes.map(({ label, href }, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "capitalize",
                          navigationMenuTriggerStyle()
                        )}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <div className="flex gap-x-5">
                <Button size="icon" variant="link" asChild>
                  <Link href="/auth/login">
                    <span className="sr-only">Login</span>
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="link" asChild>
                  <Link href="/cart">
                    <span className="sr-only">ShoppingCart</span>
                    <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <SwitcherLanguages />
              </div>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
