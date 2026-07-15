import { NeonGradientCard } from "./ui/neon-gradient-card";

interface CardPlanoProps {
  id: string;
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  features: string[];
  texto_final: string;
}

export default function CardPlano({
  tipo_plano,
  descricao_plano,
  features,
  texto_final,
}: CardPlanoProps) {
  return (
    <div className="text-purple4">
      <NeonGradientCard
        neonColors={{
          firstColor: "var(--yellow3)",
          secondColor: "var(--purple1)",
        }}
        borderRadius={20} // 20
        borderSize={2} // 5
      >
        <h2 className="text-2xl font-bold text-purple3 text-center pb-1">{tipo_plano}</h2>
        <p className="text-gray-600 text-sm tracking-wider italic pb-5">{descricao_plano}</p>
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <p key={index}>- {feature}</p>
          ))}
        </div>
        <p>{texto_final}</p>
      </NeonGradientCard>
    </div>
  );
}
