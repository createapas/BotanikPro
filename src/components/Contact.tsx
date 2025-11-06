import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Globe, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bezpłatna wycena i szybki termin realizacji!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>Telefon</CardTitle>
              <CardDescription>Zadzwoń lub napisz SMS</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="tel:570798893"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                570 798 893
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Napisz do nas wiadomość</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:botanikpro.ogrody@gmail.com"
                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all"
              >
                botanikpro.ogrody@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>Strona WWW</CardTitle>
              <CardDescription>Odwiedź naszą stronę</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://www.botanikpro.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                www.botanikpro.pl
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>Szybka realizacja</CardTitle>
              <CardDescription>Profesjonalnie i na czas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-foreground">
                Gwarantujemy szybki termin rozpoczęcia prac
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="hero"
            size="lg" 
            className="text-xl px-12 py-8"
            onClick={() => window.location.href = 'tel:570798893'}
          >
            <Phone className="h-6 w-6 mr-3" />
            Zadzwoń po bezpłatną wycenę
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
