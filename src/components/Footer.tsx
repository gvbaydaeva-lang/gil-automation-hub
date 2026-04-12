import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-lg font-bold">Гилян<span className="text-primary">.</span>dev</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Вайб-кодинг и ИИ-автоматизация для бизнеса. Подрядчик «Мой бизнес» / ЦПП.
            </p>
          </div>
          <div>
            <p className="font-heading font-semibold mb-3">Навигация</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              <Link to="/about" className="hover:text-primary transition-colors">Обо мне</Link>
            </div>
          </div>
          <div>
            <p className="font-heading font-semibold mb-3">Документы</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
              <Link to="/offer" className="hover:text-primary transition-colors">Публичная оферта</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Гилян Байдаев. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
