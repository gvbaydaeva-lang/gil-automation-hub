import { useState } from "react";
import { getLeads, getServices, saveServices, type Service, type Lead } from "@/data/services";
import { useToast } from "@/hooks/use-toast";

const ADMIN_PASSWORD = "gilyan2024";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<"leads" | "services">("leads");
  const [leads, setLeads] = useState<Lead[]>(getLeads());
  const [services, setServices] = useState<Service[]>(getServices());
  const [editing, setEditing] = useState<Service | null>(null);
  const { toast } = useToast();

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-card border rounded-2xl p-8 w-full max-w-sm">
          <h1 className="font-heading text-xl font-bold mb-4">Админ-панель</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm mb-4 outline-none focus:ring-2 focus:ring-primary/30"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (password === ADMIN_PASSWORD) setAuth(true);
                else toast({ title: "Неверный пароль", variant: "destructive" });
              }
            }}
          />
          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) setAuth(true);
              else toast({ title: "Неверный пароль", variant: "destructive" });
            }}
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium"
          >
            Войти
          </button>
        </div>
      </div>
    );
  }

  const handleSaveService = (service: Service) => {
    const updated = services.some((s) => s.id === service.id)
      ? services.map((s) => (s.id === service.id ? service : s))
      : [...services, service];
    setServices(updated);
    saveServices(updated);
    setEditing(null);
    toast({ title: "Услуга сохранена" });
  };

  const handleDeleteService = (id: string) => {
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);
    saveServices(updated);
    toast({ title: "Услуга удалена" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container flex items-center justify-between h-14">
          <h1 className="font-heading font-bold">Админ-панель</h1>
          <button onClick={() => setAuth(false)} className="text-sm text-muted-foreground hover:text-foreground">
            Выйти
          </button>
        </div>
      </div>

      <div className="container py-6">
        <div className="flex gap-2 mb-6">
          {(["leads", "services"] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); if (t === "leads") setLeads(getLeads()); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {t === "leads" ? `Заявки (${leads.length})` : `Услуги (${services.length})`}
            </button>
          ))}
        </div>

        {tab === "leads" && (
          <div className="space-y-3">
            {leads.length === 0 && <p className="text-muted-foreground text-sm">Заявок пока нет</p>}
            {leads.map((lead) => (
              <div key={lead.id} className="bg-card border rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.phone} · {lead.email || "—"}</p>
                    {lead.serviceId && (
                      <p className="text-xs text-primary mt-1">
                        Услуга: {services.find((s) => s.id === lead.serviceId)?.title || lead.serviceId}
                      </p>
                    )}
                    {lead.message && <p className="text-sm mt-2">{lead.message}</p>}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(lead.createdAt).toLocaleDateString("ru-RU")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "services" && (
          <>
            <button
              onClick={() =>
                setEditing({
                  id: crypto.randomUUID(),
                  title: "",
                  shortDescription: "",
                  fullDescription: "",
                  price: "",
                  category: "",
                  icon: "📦",
                  features: [],
                })
              }
              className="mb-4 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium"
            >
              + Добавить услугу
            </button>

            {editing && (
              <ServiceEditor
                service={editing}
                onSave={handleSaveService}
                onCancel={() => setEditing(null)}
              />
            )}

            <div className="space-y-3 mt-4">
              {services.map((s) => (
                <div key={s.id} className="bg-card border rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing(s)}
                      className="text-sm text-primary hover:underline"
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => handleDeleteService(s.id)}
                      className="text-sm text-destructive hover:underline"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ServiceEditor({
  service,
  onSave,
  onCancel,
}: {
  service: Service;
  onSave: (s: Service) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(service);
  const [featuresStr, setFeaturesStr] = useState(service.features.join(", "));

  return (
    <div className="bg-card border rounded-xl p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-1">Иконка (эмодзи)</label>
          <input
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
            className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Категория</label>
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Название</label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Краткое описание</label>
        <input
          value={form.shortDescription}
          onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Полное описание</label>
        <textarea
          value={form.fullDescription}
          onChange={(e) => setForm({ ...form, fullDescription: e.target.value })}
          rows={3}
          className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none resize-none"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Цена</label>
        <input
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Фичи (через запятую)</label>
        <input
          value={featuresStr}
          onChange={(e) => setFeaturesStr(e.target.value)}
          className="w-full rounded-lg border bg-background px-4 py-2 text-sm outline-none"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onSave({ ...form, features: featuresStr.split(",").map((f) => f.trim()).filter(Boolean) })}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium"
        >
          Сохранить
        </button>
        <button onClick={onCancel} className="px-5 py-2 rounded-lg text-sm border">
          Отмена
        </button>
      </div>
    </div>
  );
}
