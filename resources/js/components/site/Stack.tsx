const groups = [
  { title: "Backend", items: ["PHP 7.4 / 8.x", "Laravel", "Composer", "PHPUnit"] },
  { title: "Web Scraping", items: ["Guzzle", "DomCrawler", "Symfony Panther", "Headless Chrome", "Proxies / rotação"] },
  { title: "Integrações", items: ["REST", "Swagger / OpenAPI", "Webhooks", "OAuth · JWT"] },
  { title: "Infra & DevOps", items: ["Docker", "AWS EC2 / S3", "Linux", "Nginx", "GitLab CI/CD"] },
  { title: "Bancos de dados", items: ["MySQL", "MariaDB", "PostgreSQL", "Oracle"] },
  { title: "Ferramentas", items: ["Git", "Postman", "Redis", "Jira"] },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">// stack técnica</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
            Ferramentas que uso <span className="text-gradient">em produção</span>, não em tutoriais.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <div key={i} className="reveal glass rounded-2xl p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">{g.title}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-full text-sm bg-muted/60 border border-border text-foreground/90 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.6)] transition-all cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};