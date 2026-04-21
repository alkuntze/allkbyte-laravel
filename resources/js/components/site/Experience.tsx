const items = [
  {
    period: "2022 — 2026",
    role: "Desenvolvedor Backend Sênior · PJ",
    company: "CLIF — Centro Logístico Integrado Fastcargo",
    bullets: [
      "Integrações com órgãos governamentais (Siscomex e correlatos) e parceiros logísticos via APIs REST.",
      "Refatoração de sistemas legados PHP/Laravel mantendo continuidade da operação.",
      "Pipelines de coleta e enriquecimento de dados com Laravel Queues e monitoramento de falhas.",
      "Infra em AWS (EC2, S3), Docker e CI/CD via GitLab.",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Desenvolvedor Backend · Freelance",
    company: "GuardTI",
    bullets: [
      "Plataforma de diagnóstico e gestão de vulnerabilidades em ambientes corporativos.",
      "APIs Laravel + integrações com ferramentas de segurança e relatórios automatizados.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">// experiência</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
            Onde o código <span className="text-gradient">virou impacto</span>.
          </h2>
        </div>

        <div className="mt-14 relative max-w-4xl">
          <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={i} className="reveal relative pl-10 md:pl-14">
                <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="glass rounded-2xl p-6 md:p-7">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">{it.period}</span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold">{it.role}</h3>
                  </div>
                  <div className="mt-1 text-muted-foreground">{it.company}</div>
                  <ul className="mt-4 space-y-2">
                    {it.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm md:text-base">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};