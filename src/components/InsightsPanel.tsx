
import { Brain, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

interface Insight {
  title: string;
  description: string;
}

export const InsightsPanel = () => {
  const insights: Insight[] = [
    {
      title: "Screen Time Alert",
      description: "Screen time has increased by 25% this week. Consider setting limits.",
    },
    {
      title: "Physical Activity",
      description: "Only 30 minutes of physical activity today. Encourage outdoor play.",
    },
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center gap-2">
        <Brain className="w-5 h-5 text-secondary" />
        <h2 className="text-xl font-semibold">AI Insights</h2>
      </div>
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-4 h-4 text-secondary mt-1" />
              <div>
                <h3 className="font-medium">{insight.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
