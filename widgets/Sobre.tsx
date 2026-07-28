import { NumberTicker } from "@/components/ui/number-ticker";
import { Award, Users, Dumbbell, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Award, startValue: 0, value: 8, label: "Anos de experiência" },
  { icon: Users, startValue: 200, value: 320, label: "Alunos atendidos" },
  { icon: Dumbbell, startValue: 0, value: 12, label: "Certificações" },
];

export default function Sobre() {
  return (
    <section className="relative w-full overflow-hidden px-6">
      <div className="relative z-10 mx-auto max-w-md">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-2">
          <span className="bg-purple3 h-px w-8" />
          <span className="text-purple3 text-sm font-semibold tracking-[0.25em] uppercase">
            Sobre mim
          </span>
        </div>

        {/* Portrait + name */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="from-yellow3 absolute -inset-1 rounded-3xl bg-linear-to-tr to-[#2e0a4d] opacity-60 blur-sm" />
            <Image
              src="/sobre/bruno1.png"
              alt="Personal trainer"
              className="relative h-44 w-44 rounded-3xl border border-white/10 object-cover"
              width={176}
              height={176}
            />
            <span className="bg-purple2 shadow-yellow3/30 absolute -right-2 -bottom-2 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg">
              <Dumbbell className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
          <h2 className="text-purple3 text-2xl font-bold tracking-tight">
            Bruno Levien
          </h2>
          <p className="mt-1 text-sm">Personal Trainer • CREF 012345-G/PR</p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-purple2 rounded-2xl border border-white/10 p-3 text-center"
            >
              <s.icon className="text-yellow3 mx-auto mb-2 h-5 w-5" />
              <div className="text-xl leading-none font-bold text-white">
                <NumberTicker
                  value={s.value}
                  startValue={s.startValue}
                  className="whitespace-pre-wrap text-white"
                />
                <span>+</span>
              </div>
              <div className="mt-1.5 text-xs leading-tight text-white">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="mb-10">
          <div className="relative rounded-2xl border border-black/10 bg-black/3 p-5">
            <Quote className="text-yellow3 absolute -top-3 left-5 h-6 w-6 fill-[#0f031f]" />
            <p className="text-purple4 text-[15px] leading-relaxed">
              Me chamo Bruno Levien, sou Bacharel em Educação Física pela
              Universidade Federal de Pelotas (UFPEL), formado no ano de 2023.
              Ao longo da minha trajetória, passei por diferentes modalidades e
              metodologias de treinamento, o que me permitiu construir uma visão
              mais ampla sobre o movimento humano e a preparação física.
            </p>
            <p className="text-purple4 mt-4 text-[15px] leading-relaxed">
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
            <p className="text-purple4 mt-4 text-[15px] leading-relaxed">
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
        </div>

        {/* CTA */}
        <button className="group from-yellow3 shadow-yellow3/30 hover:shadow-yellow3/50 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r to-yellow3 px-6 py-4 text-[15px] font-bold text-[#0f031f] shadow-xl transition active:scale-[0.98]">
          QUERO MELHORAR MEU CORPO
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
