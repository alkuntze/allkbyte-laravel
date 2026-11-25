import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Instagram, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error" | "ratelimit";

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

// Configuração injetada pelo Laravel em app.blade.php (variáveis de ambiente)
const meta = (name: string) =>
  (document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null)?.content ?? "";
const WEBHOOK_URL = meta("contact-webhook-url");
const TURNSTILE_SITE_KEY = meta("turnstile-site-key");

const FORM_VAZIO = { nome: "", empresa: "", email: "", projeto: "", website: "" };
const ERRO_PADRAO = "Erro ao enviar. Tente novamente ou entre em contato diretamente.";

export const Contact = () => {
  const [form, setForm] = useState(FORM_VAZIO);
  const [status, setStatus] = useState<Status>("idle");
  const [erro, setErro] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  // Momento em que o formulário foi exibido (o n8n exige tempo mínimo de preenchimento)
  const abertoEm = useRef(Date.now());

  const formVisivel = status !== "success";

  // Renderiza o widget do Cloudflare Turnstile (o script carrega de forma assíncrona)
  useEffect(() => {
    if (!formVisivel || !TURNSTILE_SITE_KEY) return;
    abertoEm.current = Date.now();

    let cancelado = false;
    const tentar = () => {
      if (cancelado) return;
      if (!window.turnstile || !turnstileRef.current) {
        setTimeout(tentar, 100);
        return;
      }
      widgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        language: "pt-br",
        theme: "dark",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };
    tentar();

    return () => {
      cancelado = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
      setTurnstileToken("");
    };
  }, [formVisivel]);

  // O token do Turnstile só vale para um envio
  const resetarTurnstile = () => {
    setTurnstileToken("");
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEBHOOK_URL) {
      setErro(ERRO_PADRAO);
      setStatus("error");
      return;
    }
    if (!turnstileToken) {
      setErro("Confirme que você não é um robô.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    // form-urlencoded evita o preflight CORS; o n8n converte para body.*
    const body = new URLSearchParams({
      nome: form.nome,
      email: form.email,
      assunto: form.empresa,
      mensagem: form.projeto,
      website: form.website,
      _ts: String(abertoEm.current),
      "cf-turnstile-response": turnstileToken,
    });

    try {
      const res = await fetch(WEBHOOK_URL, { method: "POST", body });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok !== false) {
        setStatus("success");
        setForm(FORM_VAZIO);
        return;
      }

      setErro(data.mensagem || ERRO_PADRAO);
      setStatus(res.status === 429 ? "ratelimit" : "error");
      resetarTurnstile();
    } catch {
      setErro(ERRO_PADRAO);
      setStatus("error");
      resetarTurnstile();
    }
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 reveal">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">// contato</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              Vamos conversar sobre seu <span className="text-gradient">próximo projeto</span>?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Preencha o formulário e te respondo por e-mail — ou use os canais ao lado.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:contato@allkbyte.com.br"
                className="flex items-center gap-3 p-4 rounded-xl glass hover:border-primary/60 transition-colors"
              >
                <span className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">E-mail</div>
                  <div className="font-medium">contato@allkbyte.com.br</div>
                </div>
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/alessandrokuntze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/allkbyte"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

            </div>
          </div>

          <div className="lg:col-span-3 reveal glass rounded-3xl p-6 md:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle className="h-14 w-14 text-green-400" />
                <h3 className="font-display text-2xl font-bold">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Recebi o seu contato e responderei em breve por e-mail.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-border text-sm hover:border-primary/60 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* honeypot — invisível para humanos, bots preenchem */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required minLength={2} maxLength={100} />
                  <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} maxLength={150} />
                </div>
                <Field
                  label="E-mail"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                  maxLength={150}
                />
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Conta um pouco do projeto
                  </label>
                  <textarea
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    value={form.projeto}
                    onChange={(e) => setForm({ ...form, projeto: e.target.value })}
                    placeholder="Stack, prazos, escopo..."
                    className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                <div ref={turnstileRef} className="min-h-[65px]" />

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {erro}
                  </div>
                )}

                {status === "ratelimit" && (
                  <div className="flex items-center gap-2 text-sm text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-xl px-4 py-3">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {erro || "Muitas tentativas. Aguarde alguns minutos antes de enviar novamente."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  type = "text",
  value,
  onChange,
  required,
  minLength,
  maxLength,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) => (
  <div>
    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</label>
    <input
      type={type}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
    />
  </div>
);
