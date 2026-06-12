import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import OfflinePayments from "@/components/OfflinePayments/OfflinePayments";
import CryptoLiquidity from "@/components/CryptoLiquidity/CryptoLiquidity";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <OfflinePayments />
        <CryptoLiquidity />

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
