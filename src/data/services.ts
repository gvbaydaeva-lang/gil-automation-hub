export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  category: string;
  icon: string;
  features: string[];
}

export const defaultServices: Service[] = [
  {
    id: "websites",
    title: "Сайты и лендинги",
    shortDescription: "Современные сайты с ИИ-разработкой — быстро, качественно, с уникальным дизайном",
    fullDescription: "Создаю сайты нового поколения с помощью ИИ-инструментов: от лендингов до многостраничных проектов. Каждый сайт адаптивен, быстр и оптимизирован под SEO. Вайб-кодинг позволяет сфокусироваться на результате, а не на рутине.",
    price: "от 30 000 ₽",
    category: "Разработка",
    icon: "🌐",
    features: ["Адаптивный дизайн", "SEO-оптимизация", "Быстрая загрузка", "CMS для управления"],
  },
  {
    id: "chatbots",
    title: "Чат-боты",
    shortDescription: "Умные чат-боты для Telegram, WhatsApp и веб-сайтов на базе GPT и других LLM",
    fullDescription: "Разрабатываю чат-ботов, которые понимают контекст, отвечают как живой оператор и интегрируются с вашими системами. Боты для поддержки, продаж, записи на услуги и автоматизации рутины.",
    price: "от 25 000 ₽",
    category: "ИИ",
    icon: "🤖",
    features: ["GPT-интеграция", "Мультиплатформенность", "Аналитика диалогов", "Обучение на ваших данных"],
  },
  {
    id: "apps",
    title: "Веб-приложения",
    shortDescription: "Полноценные веб-приложения с базами данных, авторизацией и бизнес-логикой",
    fullDescription: "Создаю веб-приложения любой сложности: CRM, ERP, личные кабинеты, дашборды, внутренние инструменты. Используя вайб-кодинг, доставляю решения в 3-5 раз быстрее классической разработки.",
    price: "от 50 000 ₽",
    category: "Разработка",
    icon: "📱",
    features: ["Авторизация и роли", "База данных", "API-интеграции", "Реальное время"],
  },
  {
    id: "automation",
    title: "Автоматизация бизнеса",
    shortDescription: "Автоматизация процессов с помощью ИИ: от документооборота до аналитики",
    fullDescription: "Нахожу узкие места в ваших процессах и автоматизирую их с помощью ИИ. Автоматические отчёты, обработка заявок, парсинг данных, email-рассылки, интеграция сервисов между собой.",
    price: "от 20 000 ₽",
    category: "Автоматизация",
    icon: "⚡",
    features: ["Анализ процессов", "ИИ-обработка данных", "Интеграция сервисов", "Экономия до 80% времени"],
  },
  {
    id: "games",
    title: "Игры и интерактив",
    shortDescription: "Браузерные игры, квизы, интерактивные презентации на базе ИИ",
    fullDescription: "Создаю интерактивный контент: мини-игры для маркетинга, квизы для лидогенерации, интерактивные презентации для мероприятий. ИИ помогает генерировать контент и адаптировать сложность.",
    price: "от 35 000 ₽",
    category: "Разработка",
    icon: "🎮",
    features: ["Браузерные игры", "Квизы и тесты", "Геймификация", "Маркетинговый интерактив"],
  },
  {
    id: "integrations",
    title: "Интеграции и API",
    shortDescription: "Связываю ваши сервисы между собой: 1С, CRM, мессенджеры, платёжные системы",
    fullDescription: "Интегрирую любые системы между собой: 1С, Битрикс24, AmoCRM, Telegram, WhatsApp, платёжные шлюзы, маркетплейсы. Данные текут автоматически, без ручного ввода.",
    price: "от 15 000 ₽",
    category: "Автоматизация",
    icon: "🔗",
    features: ["1С и CRM", "Мессенджеры", "Платёжные системы", "Маркетплейсы"],
  },
];

export function getServices(): Service[] {
  const stored = localStorage.getItem("gilyan_services");
  if (stored) return JSON.parse(stored);
  return defaultServices;
}

export function saveServices(services: Service[]) {
  localStorage.setItem("gilyan_services", JSON.stringify(services));
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  message: string;
  createdAt: string;
}

export function getLeads(): Lead[] {
  const stored = localStorage.getItem("gilyan_leads");
  if (stored) return JSON.parse(stored);
  return [];
}

export function saveLead(lead: Omit<Lead, "id" | "createdAt">) {
  const leads = getLeads();
  leads.unshift({
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("gilyan_leads", JSON.stringify(leads));
}
