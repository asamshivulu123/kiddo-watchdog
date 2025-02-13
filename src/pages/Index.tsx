
import { Bell, Layout, Settings } from "lucide-react";
import { ActivityCard } from "@/components/ActivityCard";
import { InsightsPanel } from "@/components/InsightsPanel";
import { Button } from "@/components/ui/button";

const Index = () => {
  const activities = [
    {
      title: "Online Learning",
      duration: "45 minutes",
      type: "Education",
      time: "10:30 AM",
    },
    {
      title: "Gaming Session",
      duration: "30 minutes",
      type: "Entertainment",
      time: "2:15 PM",
    },
    {
      title: "Reading Time",
      duration: "20 minutes",
      type: "Education",
      time: "4:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layout className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-semibold">KiddoWatch</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Today's Activities</h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <InsightsPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
