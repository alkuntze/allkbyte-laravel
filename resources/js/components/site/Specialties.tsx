import { Network, Bot } from "lucide-react";

const items = [
  {
    icon: Network,
    title: "Integrações com APIs",
    tagline: "Conectando sistemas que não foram feitos para conversar.",
    bullets: [
      "REST · Swagger / OpenAPI · webhooks",
      "Autenticação OAuth, JWT e mTLS",
      "Integrações governamentais (Siscomex, Banco Central)",
      "Gateways financeiros e provedores logísticos",
    ],
  },
  {
    icon: Bot,
    title: "Web Scraping",
    tagline: "Coleta de dados resiliente, ética e em escala.",
    bullets: [
      "Anti-bloqueio: rotação de IPs, headers e sessões",
      "Headless browsers + parsing estruturado",
      "Agendamento via Laravel Queues e Jobs",
      "Monitoramento, alertas e reprocessamento de falhas",
    ],
  },
];

export const Specialties = () => {
  return (
    <section id="especialidades" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">// especialidades</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
            Duas frentes onde eu <span className="text-gradient">faço diferença real</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            São as áreas em que mais entrego valor — e onde a engenharia importa mais que o framework.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <article
              key={i}
              className="reveal group relative glass rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary"
            >
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/30 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 border border-primary/30 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <it.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{it.title}</h3>
                <p className="mt-2 text-muted-foreground">{it.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};