
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface HabitItemProps {
  name: string;
  category: string;
  description: string;
  days: {
    dayLetter: string;
    completed: boolean;
    isToday?: boolean;
  }[];
  streak: {
    current: number;
    best: number;
  };
}

export const HabitItem = ({
  name,
  category,
  description,
  days,
  streak,
}: HabitItemProps) => {
  return (
    <div className="w-full bg-strive-navy rounded-xl border border-strive-blue/30 p-6 mb-4 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <div className="ml-3 bg-[#1a2236] text-strive-blue px-3 py-1 rounded-full text-sm">
              {category}
            </div>
          </div>
          <p className="text-white/70 text-sm">{description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 md:gap-3">
            {days.map((day, index) => (
              <div
                key={index}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  day.completed 
                    ? "bg-strive-blue text-white" 
                    : "border-2 border-dashed border-white/20",
                  day.isToday && !day.completed && "border-2 border-strive-blue border-dashed"
                )}
              >
                {day.completed ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm text-white/60">{day.dayLetter}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-6 text-center">
            <div>
              <div className="text-white/60 text-sm mb-0.5">Current</div>
              <div className="text-2xl font-bold text-white">
                {streak.current} days
              </div>
            </div>
            <div>
              <div className="text-white/60 text-sm mb-0.5">Best</div>
              <div className="text-2xl font-bold text-white">
                {streak.best} days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
