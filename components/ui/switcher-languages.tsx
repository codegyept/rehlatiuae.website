"use client";

import * as React from "react";
import { Languages } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export function SwitcherLanguages() {
  const [Language, setLanguage] = React.useState("bottom");
  const { isScrolled } = useScrollTop(300);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isScrolled ? "ghost" : "link"}
          className={cn("text-white", isScrolled && "text-primary")}
          size="icon"
        >
          <span className="sr-only">Languages</span>
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20" align="end">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={Language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ar">Arabic</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ud">Urdu</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
