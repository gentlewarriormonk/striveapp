
import { Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  title: string;
  dueDate?: string;
  status: "pending" | "completed";
  onClick?: () => void;
}

export const TaskItem = ({
  title,
  dueDate,
  status,
  onClick,
}: TaskItemProps) => {
  return (
    <div 
      className="bg-strive-navy border border-strive-blue/30 rounded-xl p-5 mb-4 cursor-pointer transition-all duration-300 hover:bg-[#0f1520]"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div 
          className={cn(
            "w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 circle-check-animation", 
            status === "completed" 
              ? "bg-strive-blue border-strive-blue" 
              : "border-strive-blue/50"
          )}
        >
          {status === "completed" && (
            <div className="w-3 h-3 bg-white rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className={cn(
            "text-lg font-medium transition-all duration-300",
            status === "completed" 
              ? "text-white/50 line-through" 
              : "text-white"
          )}>
            {title}
          </h3>
          
          {dueDate && (
            <div className="flex items-center text-white/50 text-sm mt-1.5">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              <span>Due {dueDate}</span>
            </div>
          )}
        </div>
        
        <div className="w-8 h-8 rounded-full bg-strive-blue/10 flex items-center justify-center">
          <Circle className="w-4 h-4 text-strive-blue" />
        </div>
      </div>
    </div>
  );
};
