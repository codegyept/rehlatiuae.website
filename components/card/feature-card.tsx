import { LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-none px-0">
      <CardHeader className="px-0">
        <div className="bg-blue/20 w-12 h-12 rounded-full relative mb-5">
          <Icon className="h-10 w-10 absolute top-2 left-5" />
        </div>
        <CardTitle className="tracking-wide text-xl">{title}</CardTitle>
        <CardDescription className="leading-8 tracking-wide">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
