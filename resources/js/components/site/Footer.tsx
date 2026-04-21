import logo from "@/assets/logo-allkbyte.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ALLKByte Digital Solution" className="h-10 w-auto" />
          <span>ALLKByte Digital Solution · ME · Joinville/SC</span>
        </div>
        <div>© {new Date().getFullYear()} Alessandro Kuntze. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
};