import { DiaTextReveal } from "./ui/dia-text-reveal";

interface TituloFixoProps {
  espacoTop?: string;
  espacoBottom?: string;
}

export default function TituloFixo({
  espacoTop = 'pt-6',
  espacoBottom = 'pb-6',
}: TituloFixoProps) {
  return (
    <div
      className={`bg-background sticky top-0 z-30 ${espacoTop} ${espacoBottom}`}
    >
      {/* Fade contínuo */}
      <div className="from-background via-background/90 pointer-events-none absolute inset-x-0 top-0 z-0 h-36 bg-linear-to-b to-transparent" />
      <h2 className="text-purple3 relative z-10 text-center text-4xl font-bold xl:text-5xl">
        O QUE TORNA NOSSO{" "}
        <DiaTextReveal
          repeat
          repeatDelay={1.2}
          className="lg:mb-0.5 xl:mb-0"
          colors={[
            "oklch(0.8301 0.0904 79.25)",
            "oklch(0.7659 0.1132 80.72)",
            "oklch(0.4792 0.1019 305.18)",
            "oklch(0.3158 0.1055 296.17)",
          ]}
          text={["RESULTADO REAL", "ACOMPANHAMENTO DIFERENTE", "MÉTODO ÚNICO"]}
        />
      </h2>
      {/* Transição suave */}
      <div className="from-background pointer-events-none absolute inset-x-0 h-35 bg-linear-to-b via-transparent to-transparent" />
      {/* Se quiser deixar mais transparente, descomenta a linha abaixo */}
      <div className="from-background pointer-events-none absolute inset-x-0 h-35 bg-linear-to-b via-transparent to-transparent" />
    </div>
  );
}
