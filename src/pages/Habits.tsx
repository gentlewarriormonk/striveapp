
import { Layout } from "@/components/Layout";
import { HabitItem } from "@/components/HabitItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Habits = () => {
  // Sample data
  const habits = [
    {
      id: 1,
      name: "Sleep Early",
      category: "Health",
      description: "Go to bed by 10pm every night",
      days: [
        { dayLetter: "S", completed: true },
        { dayLetter: "M", completed: true },
        { dayLetter: "T", completed: true },
        { dayLetter: "W", completed: false, isToday: true },
        { dayLetter: "T", completed: false },
        { dayLetter: "F", completed: false },
        { dayLetter: "S", completed: false },
      ],
      streak: { current: 2, best: 12 },
    },
    {
      id: 2,
      name: "Homework",
      category: "Academics",
      description: "Complete homework before 7pm",
      days: [
        { dayLetter: "S", completed: false },
        { dayLetter: "M", completed: false },
        { dayLetter: "T", completed: true },
        { dayLetter: "W", completed: true, isToday: true },
        { dayLetter: "T", completed: false },
        { dayLetter: "F", completed: false },
        { dayLetter: "S", completed: false },
      ],
      streak: { current: 0, best: 7 },
    },
    {
      id: 3,
      name: "Reading",
      category: "Personal",
      description: "Read for 30 minutes daily",
      days: [
        { dayLetter: "S", completed: true },
        { dayLetter: "M", completed: true },
        { dayLetter: "T", completed: false },
        { dayLetter: "W", completed: false, isToday: true },
        { dayLetter: "T", completed: false },
        { dayLetter: "F", completed: false },
        { dayLetter: "S", completed: false },
      ],
      streak: { current: 0, best: 5 },
    },
    {
      id: 4,
      name: "Exercise",
      category: "Health",
      description: "30 minutes of physical activity",
      days: [
        { dayLetter: "S", completed: false },
        { dayLetter: "M", completed: true },
        { dayLetter: "T", completed: true },
        { dayLetter: "W", completed: false, isToday: true },
        { dayLetter: "T", completed: false },
        { dayLetter: "F", completed: false },
        { dayLetter: "S", completed: false },
      ],
      streak: { current: 0, best: 3 },
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Habits</h1>
          <p className="text-white/70">Track and manage your daily habits</p>
        </div>
        
        <Button className="mt-4 md:mt-0 bg-strive-blue hover:bg-strive-blue/90 text-white rounded-full">
          <Plus className="h-5 w-5 mr-2" />
          New Habit
        </Button>
      </div>
      
      <div className="overflow-x-auto mb-8">
        <div className="min-w-[768px]">
          <div className="grid grid-cols-12 gap-4 py-4 text-white/70 text-sm font-medium border-b border-white/10">
            <div className="col-span-4 pl-6">Habit</div>
            <div className="col-span-7 grid grid-cols-7 text-center">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="col-span-1 text-right pr-6">Streak</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {habits.map(habit => (
          <HabitItem
            key={habit.id}
            name={habit.name}
            category={habit.category}
            description={habit.description}
            days={habit.days}
            streak={habit.streak}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Habits;
