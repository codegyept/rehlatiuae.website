"use client";

import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

export const Heading = ({
  title,
  className,
  children,
}: Readonly<{
  title: string;
  className?: HTMLAttributes<HTMLElement>;
  children?: React.ReactNode;
}>) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center gap-x-5 border-b py-4",
        className
      )}
    >
      <h1 className="text-lg md:text-xl lg:text-2xl tracking-wider flex-1">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
};
