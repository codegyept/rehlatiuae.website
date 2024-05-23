import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const Logo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const { isScrolled } = useScrollTop(300);

  return (
    <Link href="/" className={cn("", className)} {...props}>
      {isScrolled ? (
        <Image src="/logo-dark.svg" alt="Logo" width={160} height={80} />
      ) : (
        <Image src="/logo.svg" alt="Logo" width={160} height={80} />
      )}
    </Link>
  );
};
