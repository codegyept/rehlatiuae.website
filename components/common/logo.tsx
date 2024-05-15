import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link href="/" className={cn("", className)} {...props}>
      <Image src="/logo.svg" alt="Logo" width={160} height={80} />
    </Link>
  );
};
