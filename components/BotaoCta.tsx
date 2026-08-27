import { ArrowRight } from "lucide-react";

interface BotaoCtaProps {
  sessao: string;
  texto: string;
}

export default function BotaoCta({ sessao, texto }: BotaoCtaProps) {
  return (
    <div className="mx-auto w-full">
      <a
        href={sessao}
        className="text-purple4 shadow-yellow3/20 hover:shadow-yellow3/50 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 text-[15px] font-bold uppercase shadow-xl transition hover:scale-102 hover:gap-3 hover:duration-250 active:scale-[0.98] xl:text-xl"
      >
        {texto}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 xl:mb-1" />
      </a>
    </div>
  );
}
