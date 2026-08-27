import BotaoCta from "@/components/BotaoCta";
import SectionTween from "@/components/motion_custom/SectionTween";
import SpringCustom from "@/components/motion_custom/SpringCustom";
import TituloSessao from "@/components/TituloSessao";
import { NumberTicker } from "@/components/ui/number-ticker";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import { Award, Users, Dumbbell, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Award, startValue: 0, value: 5, label: "Anos de experiência" },
  { icon: Users, startValue: 0, value: 100, label: "Alunos atendidos" },
  { icon: Dumbbell, startValue: 0, value: 12, label: "Certificações" },
];

export default function Sobre() {
  return (
    <div className="relative z-10 mx-auto flex flex-col items-center px-6 py-12 md:w-md xl:w-xl">
      {/* Eyebrow */}
      <TituloSessao centralizado={true} className="mb-6">
        <BottomUpLetters triggerOnView={true}>Sobre mim</BottomUpLetters>
      </TituloSessao>

      {/* Portrait + name */}
      <SectionTween upToDown={false} initialNum={60}>
        <div className="flex flex-col items-center">
          <div className="relative mb-5">
            <div className="from-yellow3 absolute -inset-1 rounded-3xl bg-linear-to-tr to-[#2e0a4d] opacity-60 blur-sm" />
            <div className="relative h-44 w-44 xl:h-80 xl:w-80">
              <Image
                src="/sobre/bruno1.png"
                alt="Bruno Levien"
                className="absolute inset-0 rounded-3xl border border-white/10 object-cover xl:h-60 xl:w-60"
                fill
              />
            </div>
            <span className="bg-purple2 shadow-yellow3/30 absolute -right-2 -bottom-2 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg xl:h-15 xl:w-15">
              <Dumbbell className="stroke-2.5 h-4.5 w-4.5 xl:h-8 xl:w-8" />
            </span>
          </div>
        </div>
      </SectionTween>

      {/* Nome e credencial */}
      <div className="mb-10 flex flex-col text-center">
        <h2 className="text-purple3 text-2xl font-bold tracking-tight xl:text-3xl">
          <BottomUpLetters triggerOnView={true}>Bruno Levien</BottomUpLetters>
        </h2>
        <p className="mt-1 text-sm xl:text-base">
          <BottomUpLetters triggerOnView={true}>
            Personal Trainer • CREF 036237-G/RS
          </BottomUpLetters>
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-purple2 rounded-2xl border border-white/10 p-3 text-center"
          >
            <s.icon className="text-yellow3 mx-auto mb-2 h-5 w-5 xl:h-9 xl:w-9" />
            <div className="text-xl leading-none font-bold text-white xl:text-2xl">
              <NumberTicker
                value={s.value}
                startValue={s.startValue}
                className="whitespace-pre-wrap text-white"
              />
              <span>+</span>
            </div>
            <div className="mt-1.5 text-xs leading-tight text-white xl:text-base">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="pb-8">
        <SectionTween upToDown={false} initialNum={60}>
          <div className="relative rounded-2xl border border-black/10 bg-black/3 p-5">
            <Quote className="text-yellow3 absolute -top-3 left-5 h-6 w-6 fill-[#0f031f]" />
            <p className="text-purple4 text-base leading-relaxed xl:text-xl xl:text-black/75">
              Me chamo Bruno Levien, sou Bacharel em Educação Física pela
              Universidade Federal de Pelotas (UFPEL), formado no ano de 2023.
              Ao longo da minha trajetória, passei por diferentes modalidades e
              metodologias de treinamento, o que me permitiu construir uma visão
              mais ampla sobre o movimento humano e a preparação física.
            </p>
            <p className="text-purple4 mt-4 text-base leading-relaxed xl:text-xl xl:text-black/75">
              Minha jornada começou na musculação, ela teve seu papel. Me deu
              <span className="text-yellow3">
                {" "}
                base, disciplina e constância
              </span>
              . Mas chegou um momento em que aquilo já não me saciava mais. Os
              treinos começaram a parecer monótonos, repetitivos, sem o tipo de
              desafio que eu procurava. Mas foi o estudo das capacidades físicas
              e do movimento que transformou minha forma de enxergar o
              treinamento. Foi nesse processo que nasceu o Funcional Flow, uma
              metodologia baseada na integração entre mobilidade, controle,
              força e condicionamento para desenvolver um corpo mais atlético,
              capaz e adaptável.
            </p>
            <p className="text-purple4 mt-4 text-base leading-relaxed xl:text-xl xl:text-black/75">
              Dessa forma, minha missão é mostrar que o treinamento vai muito
              além da estética. Quero ajudar cada aluno a desenvolver um corpo
              atlético, ou seja: que se mova com qualidade, produza força com
              eficiência e esteja preparado para as demandas da vida. Porque
              acredito que a verdadeira transformação acontece quando você
              percebe tudo aquilo que seu corpo é capaz de fazer. A estética, a
              confiança e a performance surgem como consequência de um corpo
              mais forte, mais resistente e mais preparado.
            </p>
          </div>
        </SectionTween>
      </div>

      {/* CTA */}
      <div className="w-full">
        <SpringCustom delayNum={0.5}>
          <BotaoCta sessao="#planos" texto="quero melhorar meu corpo" />
        </SpringCustom>
      </div>
    </div>
  );
}
