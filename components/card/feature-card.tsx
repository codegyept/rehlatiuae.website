import { LucideIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const FeatureCard = ({
  title,
  icon: Icon,
  description,
}: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-none px-0">
      <CardHeader className="px-0 bg-blue/25 rounded-full w-[50px] h-[50px] mb-5 relative">
        <Icon className="h-10 w-10 absolute left-6 bottom-0" />
      </CardHeader>
      <CardTitle className="tracking-wide text-xl">{title}</CardTitle>
      <CardDescription className="leading-8 tracking-wide">
        {description}
      </CardDescription>
    </Card>
  );
};
