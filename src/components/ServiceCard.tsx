import { Link } from "react-router-dom";
import { Service } from "@/data/services";
import AnimatedSection from "./AnimatedSection";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link
        to={`/services/${service.id}`}
        className="group block bg-card rounded-2xl p-6 border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
      >
        <span className="text-3xl">{service.icon}</span>
        <h3 className="font-heading font-semibold text-lg mt-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{service.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{service.category}</span>
          <span className="text-sm font-semibold text-primary">{service.price}</span>
        </div>
      </Link>
    </AnimatedSection>
  );
}
