import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sprout, Truck, Wind, Droplet, Snowflake, FlowerIcon, Shovel } from "lucide-react";
import mowingImage from "@/assets/service-mowing.jpg";
import pruningImage from "@/assets/service-pruning.jpg";
import plantingImage from "@/assets/service-planting.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Koszenie trawy",
      description: "Profesjonalne koszenie traktorkiem, kosiarką i kosą spalinową",
      image: mowingImage,
    },
    {
      icon: Sprout,
      title: "Przycinanie drzew i krzewów",
      description: "Formowanie drzew, krzewów owocowych i ozdobnych",
      image: pruningImage,
    },
    {
      icon: FlowerIcon,
      title: "Sadzenie i pielęgnacja",
      description: "Sadzenie, profilaktyka oraz zwalczanie chorób roślin, odchwaszczanie i nawożenie",
      image: plantingImage,
    },
    {
      icon: Shovel,
      title: "Porządkowanie terenów",
      description: "Porządkowanie zarosniętych terenów i przygotowanie pod siew",
    },
    {
      icon: Wind,
      title: "Pielęgnacja trawników",
      description: "Aeracja, wertykulacja, piaskowanie i watowanie trawników",
    },
    {
      icon: Truck,
      title: "Wywóz odpadów",
      description: "Wywóz odpadów zielonych i sprzątanie placów",
    },
    {
      icon: Droplet,
      title: "Mycie kostki",
      description: "Mycie kostki brukowej i czyszczenie placów utwardzonych",
    },
    {
      icon: Snowflake,
      title: "Odśnieżanie",
      description: "Profesjonalne usługi odśnieżania w sezonie zimowym",
    },
  ];

  return (
    <section id="uslugi" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Zakres Usług
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferujemy kompleksową pielęgnację terenów zielonych dla spółdzielni mieszkaniowych, 
            szkół, posesji prywatnych i innych instytucji
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">
                Dodatkowe Usługi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-lg">
              <p>🌿 Usługa glebogryzarką</p>
              <p>🍂 Grabienie liści</p>
              <p>⚰️ Opieka nad grobami</p>
              <p className="pt-4 font-semibold">💡 Fachowe doradztwo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
