import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="font-heading text-3xl font-bold mb-8">Политика конфиденциальности</h1>
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта gilyan.dev (далее — Сайт), принадлежащего ИП Байдаев Гилян (далее — Оператор).</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">2. Сбор персональных данных</h2>
            <p>Оператор собирает следующие данные: имя, номер телефона, адрес электронной почты, текст сообщения. Данные предоставляются пользователем добровольно при заполнении форм на Сайте.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">3. Цели обработки</h2>
            <p>Персональные данные используются исключительно для связи с пользователем, предоставления консультаций и оказания услуг по запросу пользователя.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">4. Защита данных</h2>
            <p>Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения и распространения.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">5. Передача третьим лицам</h2>
            <p>Оператор не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
          </section>
          <section>
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">6. Контакты</h2>
            <p>По вопросам, связанным с обработкой персональных данных, обращайтесь через форму обратной связи на Сайте.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
