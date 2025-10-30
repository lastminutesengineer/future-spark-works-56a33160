import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Student, IIT Delhi",
    image: "👨‍🎓",
    rating: 5,
    text: "Last Minutes Engineer saved my final year project! Got a complete IoT solution that impressed my professors. The documentation was crystal clear.",
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    image: "👩‍💼",
    rating: 5,
    text: "We needed a prototype fast. Their ready-made projects helped us secure funding within weeks. Exceptional quality and support!",
  },
  {
    name: "Arjun Mehta",
    role: "Electronics Hobbyist",
    image: "🔧",
    rating: 5,
    text: "The component quality is outstanding. Built my smart home system using their modules. Everything works flawlessly!",
  },
  {
    name: "Sneha Kumar",
    role: "Workshop Coordinator",
    image: "👩‍🏫",
    rating: 5,
    text: "Conducted 10+ workshops with their kits. Students love the hands-on experience. Great for learning and innovation!",
  },
  {
    name: "Vikram Singh",
    role: "Product Developer",
    image: "💡",
    rating: 5,
    text: "Rapid prototyping made easy. Their projects are well-engineered and production-ready. Highly recommend for makers!",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="holographic">What Our Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 1000+ satisfied students, makers, and innovators who trust us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`max-w-6xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="holographic-card p-6 h-full group">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-foreground/90 mb-6 line-clamp-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl neon-border-pulse">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 holographic-card border-primary/40 hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-12 holographic-card border-primary/40 hover:border-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
