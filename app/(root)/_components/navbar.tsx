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

export const Navbar = () => {
  const { isScrolled } = useScrollTop(300);

  return (
    <div
      className={cn(
        "fixed top-0 z-20 bg-background w-full h-16 flex justify-between items-center transition-all",
        isScrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex items-center justify-between container">
        <div className="w-5/6 md:w-1/2 flex items-center gap-x-5">
          <Logo />
          <div className="flex items-center gap-x-2 flex-1">
            <Input
              type="text"
              placeholder="Search by activities and dest"
              className="flex-1"
            />
            <Button size="icon">
              <span className="sr-only">Search</span>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
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
            <Button size="icon" variant="outline">
              <span className="sr-only">DollarSign</span>
              <DollarSign className="h-5 w-5" />
            </Button>
            <Button size="icon">
              <span className="sr-only">Languages</span>
              <Languages className="h-5 w-5" />
            </Button>
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
                <Button size="icon" variant="outline" asChild>
                  <Link href="/auth/login">
                    <span className="sr-only">Login</span>
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <Link href="/cart">
                    <span className="sr-only">ShoppingCart</span>
                    <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="outline">
                  <span className="sr-only">DollarSign</span>
                  <DollarSign className="h-5 w-5" />
                </Button>
                <Button size="icon">
                  <span className="sr-only">Languages</span>
                  <Languages className="h-5 w-5" />
                </Button>
              </div>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
