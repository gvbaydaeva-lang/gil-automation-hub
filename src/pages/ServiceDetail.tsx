import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { getServices } from "@/data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const services = getServices();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold">Услуга не найдена</h1>
          <Link to="/services" className="text-primary mt-4 inline-block">← Вернуться к каталогу</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-16">
        <AnimatedSection>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Все услуги
          </Link>
          <div className="mt-6 flex items-start gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{service.category}</span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mt-2">{service.title}</h1>
              <p className="text-2xl font-heading font-semibold text-primary mt-2">{service.price}</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2">
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.fullDescription}</p>
              <h3 className="font-heading font-semibold text-lg mt-8 mb-4">Что входит</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 bg-card border rounded-xl px-4 py-3">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="bg-card border rounded-2xl p-6">
              <h3 className="font-heading font-semibold mb-4">Заказать эту услугу</h3>
              <ContactForm preselectedServiceId={service.id} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
