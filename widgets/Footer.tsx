import {
  MessageCircle,
  ArrowUp,
  Crown,
} from "lucide-react";


export default function Footer() {
  return (
    <div>
      {/* Glow decorativo */}
      <div className="bg-yellow3/10 pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="relative mx-auto w-full max-w-md px-6 pt-14 pb-8">
        {/* Marca */}
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight">
            FUNCIONAL
            <span className="text-yellow3"> FLOW</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            Treine com propósito. Evolua com consistência. Construa um corpo
            preparado para ir além.
          </p>
        </div>

        {/* Redes sociais */}
        <div className="mt-7 flex justify-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:border-yellow3/40 hover:bg-yellow3/10 hover:text-yellow3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition"
          >
            <Crown className="h-5 w-5" />
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
            className="hover:border-yellow3/40 hover:bg-yellow3/10 hover:text-yellow3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        {/* Divisor */}
        <div className="my-9 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Navegação */}
        <nav className="grid grid-cols-2 gap-y-4 text-center text-sm">
          <a
            href="#inicio"
            className="hover:text-yellow3 text-white/60 transition"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="hover:text-yellow3 text-white/60 transition"
          >
            Sobre mim
          </a>

          <a
            href="#beneficios"
            className="hover:text-yellow3 text-white/60 transition"
          >
            Benefícios
          </a>

          <a
            href="#como-funciona"
            className="hover:text-yellow3 text-white/60 transition"
          >
            Como funciona
          </a>

          <a
            href="#planos"
            className="hover:text-yellow3 text-white/60 transition"
          >
            Planos
          </a>

          <a
            href="#faq"
            className="hover:text-yellow3 text-white/60 transition"
          >
            FAQ
          </a>
        </nav>

        {/* Divisor */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Rodapé inferior */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Funcional Flow
          </p>

          <p className="text-[11px] text-white/30">
            Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Botão voltar ao topo */}
      <a
        href="#inicio"
        aria-label="Voltar ao topo"
        className="border-yellow3/30 bg-yellow3/10 text-yellow3 hover:bg-yellow3/20 absolute right-5 bottom-7 flex h-10 w-10 items-center justify-center rounded-full border transition"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  );
}
