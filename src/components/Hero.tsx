import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>
      
      <div className="relative container mx-auto px-4 py-32 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
          Botanik Pro
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-medium">
          Profesjonalne Usługi Ogrodnicze
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Szybko i sprawnie - kompleksowa pielęgnacja terenów zielonych
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero"
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Bezpłatna Wycena
          </Button>
          <Button 
            variant="secondary"
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.location.href = 'tel:570798893'}
          >
            <Phone className="h-5 w-5 mr-2" />
            Zadzwoń teraz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
