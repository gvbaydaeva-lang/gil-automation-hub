import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { getServices } from "@/data/services";
import heroPhoto from "@/assets/photo.png";

export default function Index() {
  const services = getServices();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="max-w-xl flex-1 order-2 md:order-1">
              <AnimatedSection>
                <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">Вайб-кодинг · ИИ · Автоматизация</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Создаю цифровые <br />
                  <span className="text-primary">продукты</span> с помощью ИИ
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-lg text-muted-foreground mt-6 max-w-lg">
                  Сайты, приложения, чат-боты, автоматизация — быстрее и дешевле классической разработки.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/services"
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    Смотреть услуги
                  </Link>
                  <Link
                    to="/about"
                    className="border border-foreground/20 px-8 py-3 rounded-full font-medium hover:bg-foreground/5 transition-colors"
                  >
                    Обо мне
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2}>
              <div className="order-1 md:order-2 flex-shrink-0">
                <div className="relative w-64 md:w-80 lg:w-96">
                  <img
                    src={heroPhoto}
                    alt="Гилян Байдаев"
                    className="w-full h-auto rounded-3xl shadow-2xl shadow-primary/10"
                  />
                  <div className="absolute -inset-4 rounded-[2rem] border border-primary/10 -z-10" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Services preview */}
      <section className="bg-card/50">
        <div className="container py-20">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Услуги</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Что я делаю</h2>
              </div>
              <Link to="/services" className="text-sm text-primary font-medium hover:underline hidden md:block">
                Все услуги →
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* AI importance */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Почему ИИ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Автоматизация — это не будущее, а настоящее
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Бизнес, который не использует ИИ сегодня, завтра проиграет конкурентам. Автоматизация рутинных задач высвобождает время для стратегических решений.</p>
              <p>Вайб-кодинг позволяет мне создавать решения в 3-5 раз быстрее и дешевле, чем классическая разработка. Вы получаете продукт быстрее, а платите меньше.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "3-5×", label: "Быстрее разработка" },
                { num: "80%", label: "Компенсация через ЦПП" },
                { num: "24/7", label: "Боты работают всегда" },
                { num: "∞", label: "Масштабируемость" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border rounded-2xl p-6 text-center">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Government support */}
      <section className="bg-primary/5">
        <div className="container py-20">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Государственная поддержка</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                До 80% стоимости оплатит государство
              </h2>
              <p className="text-muted-foreground mb-8">
                Я являюсь официальным подрядчиком платформы «Мой бизнес». Через Центр поддержки предпринимательства (ЦПП) 
                ваш бизнес может получить компенсацию до 80% на цифровизацию и автоматизацию.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { step: "01", title: "Оставляете заявку", desc: "Заполняете форму на сайте, обсуждаем задачу" },
                { step: "02", title: "Оформляем через ЦПП", desc: "Готовлю документы для получения субсидии" },
                { step: "03", title: "Получаете продукт", desc: "До 80% стоимости компенсирует государство" },
              ].map((item) => (
                <div key={item.step} className="bg-background border rounded-2xl p-6">
                  <span className="text-xs font-heading font-bold text-primary">{item.step}</span>
                  <h3 className="font-heading font-semibold mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Связаться</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Обсудим ваш проект?</h2>
            <p className="text-muted-foreground">
              Оставьте заявку, и я свяжусь с вами в течение дня. Первая консультация — бесплатно.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
