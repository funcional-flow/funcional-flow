import { listDataPlans } from "@/data/list_data_plans";
import CardPlano from "@/components/CardPlano";



export default function Planos() {
  return (
    <div className="mx-10 my-20">
      <h2 className="font-semibold text-2xl pb-15">Planos</h2>
      <div className="flex flex-col gap-5">
        {listDataPlans.map((plano) => (
          <CardPlano
            key={plano.id}
            id={plano.id}
            tipo_plano={plano.tipo_plano}
            descricao_plano={plano.descricao_plano}
            features={plano.features}
            texto_final={plano.texto_final}
          />
        ))}
      </div>
    </div>
  )
}