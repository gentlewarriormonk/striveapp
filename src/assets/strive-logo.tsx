
import { cn } from "@/lib/utils";

interface StriveLogoProps {
  className?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export const StriveLogo = ({ 
  className, 
  textClassName,
  size = "md",
  withText = true 
}: StriveLogoProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm": return "h-6";
      case "lg": return "h-12";
      default: return "h-8";
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("relative", getSizeClass())}>
        <img 
          src="/lovable-uploads/8bcbcb9b-0ca6-47f2-ad89-32ac0df7f04d.png" 
          alt="Strive Logo" 
          className="h-full w-auto"
        />
      </div>
      {withText && (
        <span className={cn("text-2xl font-semibold ml-2 text-white tracking-wide", textClassName)}>
          STRIVE
        </span>
      )}
    </div>
  );
};
