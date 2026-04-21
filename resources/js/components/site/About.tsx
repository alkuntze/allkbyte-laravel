const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "3+", label: "integrações governamentais" },
  { value: "24/7", label: "pipelines de scraping em produção" },
  { value: "3+", label: "anos AWS em produção" },
];

export const About = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">// sobre</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              Engenharia backend para sistemas que <span className="text-gradient">não podem cair</span>.
            </h2>
          </div>
          <div className="reveal space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Sou <strong className="text-foreground">Alessandro Kuntze</strong>, desenvolvedor backend sênior
              à frente da <strong className="text-foreground">ALLKByte Digital Solution</strong> — empresa
              constituída (ME) em Joinville/SC, focada em projetos PJ remotos.
            </p>
            <p>
              Trabalho com <strong className="text-foreground">PHP/Laravel</strong> em sistemas de missão
              crítica: integrações com órgãos governamentais, gateways financeiros, refatoração de legados e
              pipelines de <strong className="text-foreground">web scraping</strong> que rodam 24/7 com
              monitoramento e reprocessamento automático.
            </p>
            <p>
              Entrego código que sobrevive ao primeiro deploy — e ao próximo time que vai mantê-lo.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl p-6 md:p-8 text-center hover:border-primary/60 transition-colors"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};