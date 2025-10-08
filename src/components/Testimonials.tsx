import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chanchal Antony",
    role: "HOD, AIML",
    company: "AJIET.",
    content: "This CRM transformed how our team works. We've increased our close rate by 45% in just three months.",
    rating: 5
  },
  {
    name: "Vinyas",
    role: "CEO",
    company: "Klientship",
    content: "The automation features alone save us 20 hours per week. Best investment we've made for our sales team.",
    rating: 5
  },
  {
    name: "Prajwal Shetty",
    role: "CEO",
    company: "Tneilc",
    content: "Intuitive, powerful, and the support team is incredible. We migrated from our old CRM in just two days.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sales Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies already growing faster with our CRM
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
