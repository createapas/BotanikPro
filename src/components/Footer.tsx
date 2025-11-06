const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-2">Botanik Pro</h3>
          <p className="text-sm opacity-90">
            Profesjonalne usługi ogrodnicze - szybko i sprawnie
          </p>
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Botanik Pro. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
