import { listDataPlans } from "@/data/list_data_plans";
import CardPlano from "@/components/CardPlano";
import ImageBackground from "@/components/ImageBackground";

export default function Planos() {
  return (
    <ImageBackground
      imageUrl="/planos/bg-planos.avif"
      centralizado={false}
      svh="100"
      intensidade="90"
    >
      <div className="mx-10 my-10 flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2 tracking-widest">
          <div className="bg-yellow3 h-px w-7" />
          <h3 className="text-yellow3 text-center text-lg font-semibold">
            PLANOS
          </h3>
          <div className="bg-yellow3 h-px w-7" />
        </div>
        <h1 className="text-center text-4xl">
          ESCOLHA O SEU <span className="text-yellow3">PLANO</span>
        </h1>
        <p className="text-center text-gray-300 pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          quia cumque suscipit ipsa repellendus.
        </p>
        <div className="flex flex-col gap-10">
          {listDataPlans.map((plano) => (
            <CardPlano
              key={plano.id}
              tipo_plano={plano.tipo_plano}
              descricao_plano={plano.descricao_plano}
              preco={plano.preco || ""}
              features={plano.features}
              noFeatures={plano.noFeatures || []}
              periodo={plano.periodo}
              principal={plano.principal}
            />
          ))}
        </div>
      </div>
    </ImageBackground>
  );
}
