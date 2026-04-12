import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { getServices } from "@/data/services";

export default function Services() {
  const services = getServices();
  const categories = ["Все", ...Array.from(new Set(services.map((s) => s.category)))];
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? services : services.filter((s) => s.category === active);

  return (
    <Layout>
      <section className="container py-16">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Каталог</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Услуги</h1>
          <p className="text-muted-foreground max-w-lg mb-8">
            Выберите нужную услугу или оставьте заявку — подберём решение под вашу задачу.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      <section id="contact" className="bg-card/50">
        <div className="container py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-muted-foreground">Расскажите о задаче — предложу оптимальное решение.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
