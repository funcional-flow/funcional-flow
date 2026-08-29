import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { ArrowUp, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mx-auto px-6 md:w-3xl xl:w-5xl">
      {/* Glow decorativo */}
      {/* <div className="bg-yellow3/10 pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" /> */}

      <div className="relative mx-auto w-full px-6 pt-14 pb-8">
        {/* Marca */}
        <h2 className="flex justify-center gap-1 text-2xl font-bold xl:text-4xl">
          FUNCIONAL
          <span className="text-yellow3">FLOW</span>
        </h2>
        <span className="flex justify-center text-xs font-bold tracking-[0.25em] text-white/60 uppercase xl:text-lg">
          Treino de alta performance
        </span>

        <div className="my-5 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        <div className="flex gap-2 md:gap-4">
          <div className="relative h-17 sm:h-25 w-full flex-[0.5] md:h-38 md:flex-[0.32] xl:h-62 xl:flex-[0.4]">
            <Image
              src="/footer/perfil2.jpg"
              alt="Perfil"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <p className="pb-3 text-sm text-white/90 italic xl:text-2xl">
              “À medida que você evolui e supera desafios, a confiança deixa de
              depender apenas da aparência e passa a vir do que seu corpo é
              capaz de fazer.”
            </p>
            <div className="bg-yellow3 h-px w-10 xl:h-1 xl:w-16" />
            <span className="pt-3 text-sm uppercase xl:text-xl">
              Bruno Levien
            </span>
            <span className="text-xs text-white/50 xl:text-lg">
              Personal Trainer
            </span>

            {/* Redes Sociais */}
            <div className="flex gap-5 pt-5 xl:pt-11">
              <a
                href="https://www.instagram.com/brunobad_"
                target="_blank"
                aria-label="Instagram"
                className="group flex items-center justify-center gap-1 rounded-xl transition-all hover:scale-105 hover:duration-250 xl:gap-2"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors group-hover:border-none group-hover:bg-linear-to-bl group-hover:from-pink-500 group-hover:via-yellow-600 group-hover:to-yellow-300 xl:h-12 xl:w-12">
                  <IconBrandInstagram className="h-6 w-6 xl:h-10 xl:w-10" />
                </div>
                <span className="xl:text-2xl">Instagram</span>
              </a>
              <a
                href="https://wa.me/5553991560855"
                target="_blank"
                aria-label="Whatsapp"
                className="group flex items-center justify-center gap-1 rounded-xl transition-all hover:scale-105 hover:duration-250 lg:px-2 xl:gap-2"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors group-hover:border-none group-hover:bg-green-500 xl:h-12 xl:w-12">
                  <IconBrandWhatsapp className="h-6 w-6 xl:h-10 xl:w-10" />
                </div>
                <span className="xl:text-2xl">Whatsapp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-9 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Navegação */}
        <nav className="grid grid-cols-2 gap-y-4 text-center text-sm">
          <a
            href="#hero"
            className="hover:text-yellow3 text-white/60 transition xl:text-lg"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="hover:text-yellow3 text-white/60 transition xl:text-lg"
          >
            Sobre mim
          </a>

          <a
            href="#beneficios"
            className="hover:text-yellow3 text-white/60 transition xl:text-lg"
          >
            Benefícios
          </a>

          <a
            href="#funcionamento"
            className="hover:text-yellow3 text-white/60 transition xl:text-lg"
          >
            Como funciona
          </a>

          <a
            href="#planos"
            className="hover:text-yellow3 text-white/60 transition xl:text-lg"
          >
            Planos
          </a>

          <a
            href="#faq"
            className="hover:text-yellow3 text-white/60 transition xl:text-lg"
          >
            FAQ
          </a>
        </nav>

        {/* Divisor */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Rodapé inferior */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            <p className="text-xs text-white/40 xl:text-base">
              © {new Date().getFullYear()} Funcional Flow.
            </p>

            <p className="text-xs text-white/40 xl:text-base">
              Todos os direitos reservados.
            </p>
          </div>
          <div className="text-xs text-white/40 xl:text-base">
            Site desenvolvido por{" "}
            <a
              href="https://portfolio-rm-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow3 underline underline-offset-2"
            >
              Renato Monteiro <ExternalLink className="inline h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Botão voltar ao topo */}
      <a
        href="#hero"
        aria-label="Voltar ao topo"
        className="border-yellow3/30 bg-yellow3/10 text-yellow3 hover:bg-yellow3/20 absolute right-5 bottom-7 flex h-10 w-10 items-center justify-center rounded-full border transition"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  );
}
