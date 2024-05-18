"use client";

import Link from "next/link";
import {
  DollarSign,
  Languages,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

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

import { cn } from "@/lib/utils";
import { routes } from "@/config/site";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Input } from "@/components/ui/input";
import { SwitcherLanguages } from "@/components/ui/switcher-languages";

export const Navbar = () => {
  const { isScrolled } = useScrollTop(300);

  return (
    <div
      className={cn(
        "fixed top-0 z-20 w-full h-16 bg-background flex justify-between items-center shadow-2xl transition-all",
        isScrolled && "border-b shadow-sm h-20"
      )}
    >
      <div className="flex items-center justify-between container">
        <Logo className="h-10 w-[140px]" />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {routes.map(({ label, href }, index) => (
              <NavigationMenuItem key={index}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn("capitalize", navigationMenuTriggerStyle())}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <Button size="icon" variant="ghost" asChild>
              <Link href="/auth/login">
                <span className="sr-only">Login</span>
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link href="/cart">
                <span className="sr-only">ShoppingCart</span>
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <SwitcherLanguages />
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <Button size="icon" variant="outline" asChild>
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
                <Button size="icon" variant="ghost" asChild>
                  <Link href="/auth/login">
                    <span className="sr-only">Login</span>
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" asChild>
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
