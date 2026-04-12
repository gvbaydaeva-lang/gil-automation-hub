import Layout from "@/components/Layout";

export default function Offer() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="font-heading text-3xl font-bold mb-8">Публичная оферта</h1>
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">1. Общие положения</h2>
            <p>Настоящий документ является официальной публичной офертой ИП Байдаев Гилян (далее — Исполнитель) и содержит условия оказания услуг в области разработки программного обеспечения, создания веб-сайтов, чат-ботов, автоматизации бизнес-процессов и смежных услуг.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">2. Предмет оферты</h2>
            <p>Исполнитель оказывает услуги по разработке цифровых продуктов с использованием ИИ-инструментов (вайб-кодинг), включая, но не ограничиваясь: создание веб-сайтов, веб-приложений, чат-ботов, систем автоматизации, интеграций с внешними сервисами.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">3. Порядок оказания услуг</h2>
            <p>Заказчик оставляет заявку через форму на сайте или иным согласованным способом. Исполнитель проводит оценку проекта и согласовывает объём работ и стоимость. После согласования условий стороны заключают договор.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">4. Стоимость и оплата</h2>
            <p>Стоимость услуг определяется индивидуально для каждого проекта. Возможна частичная компенсация стоимости через программу «Мой бизнес» / ЦПП (до 80% от стоимости услуг).</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">5. Гарантии</h2>
            <p>Исполнитель гарантирует качественное выполнение работ в согласованные сроки. Гарантийный период на выполненные работы составляет 30 дней с момента сдачи проекта.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">6. Ответственность сторон</h2>
            <p>Стороны несут ответственность в соответствии с действующим законодательством Российской Федерации. Исполнитель не несёт ответственности за убытки, возникшие вследствие ненадлежащего использования результатов работ Заказчиком.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
