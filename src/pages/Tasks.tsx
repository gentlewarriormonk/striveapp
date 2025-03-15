
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TaskItem } from "@/components/TaskItem";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");
  
  // Sample data
  const tasks = [
    {
      id: 1,
      title: "Math Assignment",
      dueDate: "Mar 21, 2025",
      status: "pending" as const,
    },
    {
      id: 2,
      title: "Science Project",
      dueDate: "Mar 24, 2025",
      status: "pending" as const,
    },
    {
      id: 3,
      title: "English Essay",
      dueDate: "Mar 19, 2025",
      status: "completed" as const,
    },
    {
      id: 4,
      title: "History Research",
      dueDate: "Mar 26, 2025",
      status: "pending" as const,
    },
    {
      id: 5,
      title: "Study for Physics Test",
      dueDate: "Mar 27, 2025",
      status: "pending" as const,
    },
  ];

  // Days for the calendar
  const days = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = 15; // For demonstration
  const daysWithTasks = [12, 17, 19, 21]; // Days with tasks
  
  const filteredTasks = tasks.filter(task => 
    activeTab === "active" ? task.status === "pending" : task.status === "completed"
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Homework</h1>
        </div>
        
        <Button className="mt-4 md:mt-0 bg-strive-blue hover:bg-strive-blue/90 text-white rounded-full">
          <Plus className="h-5 w-5 mr-2" />
          New Task
        </Button>
      </div>
      
      <div className="flex space-x-2 bg-white/5 p-1 rounded-lg w-fit mb-8">
        <button
          className={cn(
            "px-4 py-2 rounded-md transition-all",
            activeTab === "active" 
              ? "bg-strive-blue text-white" 
              : "text-white/70 hover:text-white hover:bg-white/5"
          )}
          onClick={() => setActiveTab("active")}
        >
          Active Tasks
        </button>
        <button
          className={cn(
            "px-4 py-2 rounded-md transition-all",
            activeTab === "completed" 
              ? "bg-strive-blue text-white" 
              : "text-white/70 hover:text-white hover:bg-white/5"
          )}
          onClick={() => setActiveTab("completed")}
        >
          Completed Tasks
        </button>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">March 2025</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-4">
          {days.map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-white/60 text-xs mb-2">{dayLabels[index % 7]}</div>
              <div 
                className={cn(
                  "w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-200",
                  day === currentDay 
                    ? "ring-2 ring-strive-blue bg-strive-navy text-white" 
                    : daysWithTasks.includes(day)
                    ? "after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-strive-blue after:rounded-full after:-bottom-1"
                    : "text-white/80",
                  "hover:bg-white/5 relative"
                )}
              >
                <span className="text-lg">{day}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            status={task.status}
          />
        ))}
        
        {filteredTasks.length === 0 && (
          <div className="glass-card p-8 text-center">
            <h3 className="text-white text-lg font-medium mb-2">
              {activeTab === "active" ? "No active tasks" : "No completed tasks"}
            </h3>
            <p className="text-white/70">
              {activeTab === "active" 
                ? "Your task list is empty. Add a new task to get started!" 
                : "You haven't completed any tasks yet. Get to work!"}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tasks;
