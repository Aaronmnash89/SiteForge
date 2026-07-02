import {
  Scale,
  ShieldCheck,
  Phone,
  Award,
  Car,
  Truck,
  HeartPulse,
  ShieldPlus,
  PersonStanding,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";

export const iconMap = {
  Scale,
  ShieldCheck,
  Phone,
  Award,
  Car,
  Truck,
  HeartPulse,
  ShieldPlus,
  PersonStanding,
  CheckCircle2,
  Star,
  Quote,
};

type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({
  name,
  size = 32,
  className,
}: IconProps) {
  const IconComponent = iconMap[name];

  return <IconComponent size={size} className={className} />;
}