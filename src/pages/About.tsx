import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-3xl">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
              <div className="w-32 h-32 rounded-2xl bg-muted border-2 border-primary/20 overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img
                  src="/photo.jpg"
                  alt="Гилян Байдаев"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    el.parentElement!.innerHTML = '<span class="text-muted-foreground text-xs text-center px-2">Фото</span>';
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Обо мне</p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Гилян Байдаев</h1>
                <p className="text-xl text-muted-foreground">
                  Специалист по вайб-кодингу и ИИ-автоматизации. Помогаю бизнесу создавать цифровые продукты нового поколения.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Я занимаюсь тем, что называют <strong className="text-foreground">вайб-кодингом</strong> — создаю программные продукты 
                  с помощью ИИ-инструментов. Это не просто использование ChatGPT для генерации кода. Это целый подход к разработке, 
                  где ИИ становится полноценным партнёром в создании сайтов, приложений, ботов и систем автоматизации.
                </p>
                <p>
                  Такой подход позволяет мне разрабатывать решения <strong className="text-foreground">в 3-5 раз быстрее</strong> и значительно дешевле, 
                  чем классические студии. При этом качество не страдает — я контролирую каждый этап и лично тестирую результат.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 bg-primary/5 rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">Подрядчик «Мой бизнес» / ЦПП</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Я являюсь официальным подрядчиком платформы <strong className="text-foreground">«Мой бизнес»</strong>. 
                  Это означает, что через <strong className="text-foreground">Центр поддержки предпринимательства (ЦПП)</strong> ваш бизнес может 
                  получить государственную субсидию на цифровизацию.
                </p>
                <p>
                  <strong className="text-foreground">Государство компенсирует до 80% стоимости</strong> моих услуг в рамках программы поддержки 
                  малого и среднего бизнеса. Я помогаю полностью с оформлением документов — от вас нужна только заявка.
                </p>
                <div className="bg-background rounded-xl p-6 mt-4">
                  <h3 className="font-heading font-semibold mb-3">Как это работает:</h3>
                  <ol className="space-y-2 text-sm">
                    <li><span className="text-primary font-semibold">1.</span> Вы обращаетесь ко мне с задачей</li>
                    <li><span className="text-primary font-semibold">2.</span> Мы определяем объём работ и стоимость</li>
                    <li><span className="text-primary font-semibold">3.</span> Я оформляю документы для ЦПП</li>
                    <li><span className="text-primary font-semibold">4.</span> Государство компенсирует до 80% от суммы</li>
                    <li><span className="text-primary font-semibold">5.</span> Вы получаете готовый продукт за 20% стоимости</li>
                  </ol>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Проектов выполнено", value: "50+" },
                { label: "Довольных клиентов", value: "40+" },
                { label: "Скорость разработки", value: "3-5×" },
                { label: "Экономия через ЦПП", value: "до 80%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border rounded-2xl p-5 text-center">
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
