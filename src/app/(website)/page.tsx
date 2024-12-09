import { ClientsSection } from './_sections/ClientsSection';
import { FrequentServicesSection } from './_sections/FrequentServices';
import { HeroSection } from './_sections/HeroSection';
import { PartnersSection } from './_sections/PartnersSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <FrequentServicesSection />
      <PartnersSection />
    </main>
  );
}
