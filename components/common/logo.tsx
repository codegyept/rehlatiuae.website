import Link from "next/link";

import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export const Logo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link href="/" className={cn("", className)} {...props}>
      <Home />
    </Link>
  );
};
