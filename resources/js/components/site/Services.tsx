import { Wrench, Workflow, Server } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Modernização de legados",
    desc: "Refatoração de aplicações PHP/Laravel, eliminação de débito técnico e atualização de versões sem quebrar produção.",
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    desc: "Laravel Queues, Jobs e agendadores para rotinas críticas, ETLs e fluxos assíncronos com retry e observabilidade.",
  },
  {
    icon: Server,
    title: "Infra & DevOps",
    desc: "Docker, AWS EC2, Nginx e CI/CD GitLab — do setup do ambiente ao deploy automatizado em produção.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">// outros serviços</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
            Suporte completo do <span className="text-gradient">backend ao deploy</span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal group glass rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};