
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
        <svg
          viewBox="0 0 800 800"
          className={cn("h-full w-auto")}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M399.5 45C322.4 45 259.7 107.7 259.7 184.8C259.7 261.9 322.4 324.6 399.5 324.6C476.6 324.6 539.3 261.9 539.3 184.8C539.3 107.7 476.6 45 399.5 45Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M157.4 436.2C93.7 455.5 51 516.6 51 586.5C51 670.1 118.9 738 202.5 738C286.1 738 354 670.1 354 586.5L354 470.9C334.2 478.2 313.6 483.9 292.4 487.9L292.4 586.5C292.4 636.6 252.5 676.4 202.5 676.4C152.4 676.4 112.6 636.6 112.6 586.5C112.6 536.5 152.4 496.6 202.5 496.6L273.1 496.6C268.5 477.6 262.1 459.1 254.2 441.4L153 441.4C152.8 441.4 152.7 441.4 152.5 441.4C154.1 439.6 155.8 437.9 157.4 436.2Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M640.2 441.4L538.4 441.4C530.4 459.1 524 477.6 519.4 496.6L590.9 496.6C640.9 496.6 680.8 536.5 680.8 586.5C680.8 636.6 640.9 676.4 590.9 676.4C540.8 676.4 501 636.6 501 586.5L501 487.9C479.7 483.9 459.1 478.2 439.4 470.9L439.4 586.5C439.4 670.1 507.3 738 590.9 738C674.5 738 742.4 670.1 742.4 586.5C742.4 516.2 699.2 454.8 635 436C636.9 437.9 638.6 439.6 640.2 441.4Z"
            fill="url(#paint2_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="259.7"
              y1="184.8"
              x2="539.3"
              y2="184.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="51"
              y1="587.1"
              x2="354"
              y2="587.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="439.4"
              y1="587.1"
              x2="742.4"
              y2="587.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {withText && (
        <span className={cn("text-2xl font-semibold ml-2 text-white tracking-wide", textClassName)}>
          STRIVE
        </span>
      )}
    </div>
  );
};
