import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section ">
        <CompanionCard
          id="123"
          name="Neura the brainy explorer"
          topic="Neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Counsy the number wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the vocabulary builder"
          topic="English literature"
          subject="language"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
