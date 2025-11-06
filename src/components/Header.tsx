import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-primary">
              Botanik Pro
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#uslugi" className="text-foreground hover:text-primary transition-colors">
              Usługi
            </a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
            <a 
              href="tel:570798893"
              className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              570 798 893
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
