
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskItem } from "@/components/TaskItem";
import { HabitItem } from "@/components/HabitItem";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, Clock, Plus, Star, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data for demonstration
  const habitDays = [
    { dayLetter: "S", completed: true },
    { dayLetter: "M", completed: true },
    { dayLetter: "T", completed: true },
    { dayLetter: "W", completed: false, isToday: true },
    { dayLetter: "T", completed: false },
    { dayLetter: "F", completed: false },
    { dayLetter: "S", completed: false },
  ];

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-1">Welcome back, Jamie</h1>
          <p className="text-white/70">Here's an overview of your progress</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button className="bg-strive-blue hover:bg-strive-blue/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <Plus className="h-4 w-4 mr-2" />
            New Habit
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-strive-navy border-white/10 shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg font-medium flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-strive-blue" />
              Current Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-strive-blue to-blue-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">12</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Adventurer</h4>
                <div className="mt-1">
                  <div className="flex items-center text-white/70 text-sm mb-1">
                    <span>2400 XP / 5000 XP</span>
                  </div>
                  <Progress value={48} className="h-1.5" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-strive-navy border-white/10 shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg font-medium flex items-center">
              <Star className="h-5 w-5 mr-2 text-strive-blue" />
              Streak Bonus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-strive-blue flex items-center justify-center">
                <span className="text-2xl font-bold text-white">x1.5</span>
              </div>
              <div>
                <h4 className="text-white text-lg font-medium">XP Multiplier</h4>
                <p className="text-white/70 text-sm">Active for the next 3 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-strive-navy border-white/10 shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg font-medium flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-strive-blue" />
              Weekly Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/70 text-sm">Habits Completed</p>
                <p className="text-2xl font-semibold text-white mt-1">18/21</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/70 text-sm">Tasks Done</p>
                <p className="text-2xl font-semibold text-white mt-1">7/10</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Today's Tasks</h2>
              <Link to="/tasks" className="text-strive-blue hover:text-strive-blue/80 text-sm">
                View All
              </Link>
            </div>
            
            <div className="space-y-3">
              <TaskItem 
                title="Math Assignment" 
                dueDate="Today at 5:00 PM" 
                status="pending" 
              />
              <TaskItem 
                title="Read Chapter 5" 
                dueDate="Today at 8:00 PM" 
                status="pending" 
              />
              <TaskItem 
                title="Submit English Essay" 
                dueDate="Yesterday" 
                status="completed" 
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Habits</h2>
              <Link to="/habits" className="text-strive-blue hover:text-strive-blue/80 text-sm">
                View All
              </Link>
            </div>
            
            <HabitItem 
              name="Sleep Early" 
              category="Health" 
              description="Go to bed by 10pm every night" 
              days={habitDays}
              streak={{ current: 2, best: 12 }}
            />
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming</h2>
            <Card className="bg-strive-navy border-white/10 shadow-lg p-4">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-strive-blue mr-2" />
                <h3 className="text-lg font-medium text-white">March 2023</h3>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                <div className="text-white/50 text-xs font-medium py-1">S</div>
                <div className="text-white/50 text-xs font-medium py-1">M</div>
                <div className="text-white/50 text-xs font-medium py-1">T</div>
                <div className="text-white/50 text-xs font-medium py-1">W</div>
                <div className="text-white/50 text-xs font-medium py-1">T</div>
                <div className="text-white/50 text-xs font-medium py-1">F</div>
                <div className="text-white/50 text-xs font-medium py-1">S</div>
                
                {/* Calendar days - first row */}
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`rounded-full w-8 h-8 mx-auto flex items-center justify-center text-sm
                      ${i === 3 ? 'bg-strive-blue text-white' : 'text-white/80 hover:bg-white/5'}
                    `}
                  >
                    {i + 1}
                  </div>
                ))}
                
                {/* Calendar days - remaining rows */}
                {[...Array(28)].map((_, i) => (
                  <div 
                    key={i + 7} 
                    className={`rounded-full w-8 h-8 mx-auto flex items-center justify-center text-sm
                      ${i + 8 === 15 ? 'ring-2 ring-strive-blue text-white' : 'text-white/80 hover:bg-white/5'}
                      ${[12, 19, 26].includes(i + 8) ? 'relative after:absolute after:w-1 after:h-1 after:bg-strive-blue after:rounded-full after:bottom-1 after:left-1/2 after:-translate-x-1/2' : ''}
                    `}
                  >
                    {i + 8}
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              <Card className="bg-strive-navy border-white/10 shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Science Project</h3>
                    <div className="flex items-center text-white/60 text-sm">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      <span>In 3 days</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-strive-navy border-white/10 shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Math Test</h3>
                    <div className="flex items-center text-white/60 text-sm">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      <span>Next week</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-strive-navy border-white/10 shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Group Presentation</h3>
                    <div className="flex items-center text-white/60 text-sm">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      <span>In 10 days</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
