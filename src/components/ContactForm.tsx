import { useState } from "react";
import { saveLead, getServices } from "@/data/services";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm({ preselectedServiceId }: { preselectedServiceId?: string }) {
  const services = getServices();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceId: preselectedServiceId || "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Заполните обязательные поля", variant: "destructive" });
      return;
    }
    saveLead(form);
    toast({ title: "Заявка отправлена!", description: "Свяжусь с вами в ближайшее время" });
    setForm({ name: "", phone: "", email: "", serviceId: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <label className="text-sm font-medium block mb-1">Имя *</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
          placeholder="Как к вам обращаться?"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Телефон *</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
          placeholder="email@example.com"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Услуга</label>
        <select
          value={form.serviceId}
          onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
          className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition"
        >
          <option value="">Выберите услугу</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Сообщение</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
          placeholder="Расскажите о вашем проекте"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
      >
        Отправить заявку
      </button>
    </form>
  );
}
