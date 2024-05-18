import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-5xl font-semibold">Not Found 404</h2>
        <p className="text-sm text-muted-foreground">
          Could not find requested resource
        </p>
        <Button size="sm" asChild className="mt-5">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back To Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
