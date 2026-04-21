import { MessageCircle, ArrowRight, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[120px] -z-10 animate-float" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary-glow/20 blur-[140px] -z-10 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8 animate-fade-in">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Joinville/SC · ME constituída · Disponível para projetos remotos
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Backend que aguenta a{" "}
            <span className="text-gradient">operação real.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Desenvolvedor <strong className="text-foreground">PHP/Laravel sênior</strong> — especialista em
            {" "}<strong className="text-foreground">integrações com APIs</strong> e
            {" "}<strong className="text-foreground">web scraping de alta resiliência</strong>.
            Disponível para projetos como PJ.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5547996813833?text=Ol%C3%A1%20Alessandro%2C%20vim%20pela%20landing%20da%20ALLKByte."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp text-background font-semibold hover:opacity-90 transition-all animate-pulse-glow"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass font-semibold hover:border-primary/60 hover:text-primary transition-colors"
            >
              Solicitar orçamento
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>PHP · Laravel</span>
            <span className="text-border">/</span>
            <span>APIs REST</span>
            <span className="text-border">/</span>
            <span>Web Scraping</span>
            <span className="text-border">/</span>
            <span>AWS · Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
};