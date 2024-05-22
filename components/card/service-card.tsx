import { Circle } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="tracking-wide text-xl flex items-center justify-start">
          <Circle className="h-4 w-4 mr-2" />
          {title}
        </CardTitle>
        <CardDescription className="leading-8 tracking-wide">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
