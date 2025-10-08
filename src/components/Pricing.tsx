import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹200",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 100 workspaces",
      "taskm management",
      "Collaboration",
      "24/7 support",
      "Chat system"
    ]
  },
  {
    name: "Professional",
    price: "₹500",
    description: "For growing businesses that need more",
    features: [
      "Up to 1000 Workspaces",
      "Advanced analytics",
      "Chatbot",
      "Custom fields",
      "API access",
      "Payment"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "₹1000",
    description: "For large teams with advanced needs",
    features: [
      "Unlimited Workspaces",
      "Collaboration",
      "Dedicated account manager",
      "Advanced security",
      "Custom Contracts",
      "E-signatures"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-border hover:shadow-xl transition-all ${
                plan.popular ? 'border-primary border-2 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <Button 
                  className="w-full mb-6" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Start Free Trial
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
