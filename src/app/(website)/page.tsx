import { ClientsSection } from './_sections/ClientsSection';
import { FrequentServicesSection } from './_sections/FrequentServices';
import { HeroSection } from './_sections/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <FrequentServicesSection />
    </main>
  );
}
