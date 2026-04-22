import { useState } from "react";
import { Mail, Linkedin, Instagram, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import qrInsta from "@/assets/allkbyte_qr_insta.png";

type Status = "idle" | "loading" | "success" | "error" | "ratelimit";

export const Contact = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", projeto: "", website: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? "",
        },
        body: JSON.stringify(form),
      });

      if (res.status === 429) { setStatus("ratelimit"); return; }
      if (!res.ok) throw new Error("server error");

      setStatus("success");
      setForm({ nome: "", empresa: "", email: "", projeto: "", website: "" });
    } catch {
      setStatus("error");
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
              <
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

              <a
                href="https://instagram.com/allkbyte"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/60 transition-colors"
              >
                <img
                  src={qrInsta}
                  alt="QR Code Instagram @allkbyte"
                  className="h-16 w-16 rounded-lg object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div>
                  <div className="text-xs text-muted-foreground">Siga no Instagram</div>
                  <div className="font-medium">@allkbyte</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Aponte a câmera para o QR Code</div>
                </div>
              </a>
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
                  <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
                  <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
                </div>
                <Field
                  label="E-mail"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Conta um pouco do projeto
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.projeto}
                    onChange={(e) => setForm({ ...form, projeto: e.target.value })}
                    placeholder="Stack, prazos, escopo..."
                    className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Erro ao enviar. Tente novamente ou entre em contato diretamente.
                  </div>
                )}

                {status === "ratelimit" && (
                  <div className="flex items-center gap-2 text-sm text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-xl px-4 py-3">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Muitas tentativas. Aguarde alguns minutos antes de enviar novamente.
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
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) => (
  <div>
    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
    />
  </div>
);
