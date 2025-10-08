import { Users, BarChart3, Zap, Mail, Globe, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Contact Management",
    description: "Keep all your customer data organized in one central hub. Track interactions, notes, and history effortlessly."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your sales pipeline with real-time reporting and customizable dashboards."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and focus on closing deals. Set up custom triggers and actions."
  },
  {
    icon: MessageCircle,
    title: "Chat system",
    description: "Our chat system is designed to deliver real-time, reliable messaging with enterprise-grade security."
  },
  {
    icon: Mail,
    title: "Email Integration",
    description: "Sync with Gmail, Outlook, and more. Track opens, clicks, and automate follow-ups."
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Work seamlessly with teams across the globe. Real-time updates and role-based permissions."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you close more deals and build stronger relationships
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
