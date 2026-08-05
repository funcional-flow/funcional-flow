import {
  listaPlanosMensal,
  listaPlanosTrimestral,
  listaPlanosSemestral,
} from "@/data/list_data_plans";
import CardPlano from "@/components/CardPlano";
import ImageBackground from "@/components/ImageBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";

export default function Planos() {
  return (
    <ImageBackground
      imageUrl="/planos/bg-planos5.jpg"
      centralizado={false}
      svh="100"
      intensidade="95"
    >
      <div className="mx-6 flex flex-col gap-3 py-12">
        <div className="flex items-center justify-center gap-2 tracking-widest">
          <div className="bg-yellow3 h-px w-7" />
          <h3 className="text-yellow3 text-center text-lg font-semibold">
            <BottomUpLetters triggerOnView={true}>PLANOS</BottomUpLetters>
          </h3>
          <div className="bg-yellow3 h-px w-7" />
        </div>
        <h1 className="text-center text-4xl">
          <BlurOutUp delay={500} triggerOnView={true}>
            ESCOLHA O SEU
          </BlurOutUp>{" "}
          <span className="text-yellow3 font-bold tracking-wider">
            <BottomUpLetters triggerOnView={true}>PLANO</BottomUpLetters>
          </span>
        </h1>
        <p className="pb-6 text-center text-gray-300">
          <BlurOutUp delay={500} triggerOnView={true}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            quia cumque suscipit ipsa repellendus.
          </BlurOutUp>
        </p>
        <Tabs defaultValue="semestral">
          <div className="relative flex flex-col">
            <TabsList className="mx-auto mb-7 rounded-sm bg-purple-100/20 px-2 outline">
              <TabsTrigger value="mensal" className={"text-white"}>
                Mensal
              </TabsTrigger>
              <TabsTrigger value="trimestral" className={"text-white"}>
                Trimestral
              </TabsTrigger>
              <TabsTrigger value="semestral" className={"text-white"}>
                Semestral
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mensal">
              <div className="flex flex-col gap-10">
                {listaPlanosMensal.map((plano) => (
                  <CardPlano
                    key={plano.id + plano.periodo}
                    tipo_plano={plano.tipo_plano}
                    descricao_plano={plano.descricao_plano}
                    preco={plano.preco || ""}
                    duracao={plano.duracao || ""}
                    features={plano.features}
                    noFeatures={plano.noFeatures || []}
                    periodo={plano.periodo}
                    principal={plano.principal}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="trimestral">
              <div className="flex flex-col gap-10">
                {listaPlanosTrimestral.map((plano) => (
                  <CardPlano
                    key={plano.id + plano.periodo}
                    tipo_plano={plano.tipo_plano}
                    descricao_plano={plano.descricao_plano}
                    preco={plano.preco || ""}
                    duracao={plano.duracao || ""}
                    features={plano.features}
                    noFeatures={plano.noFeatures || []}
                    periodo={plano.periodo}
                    principal={plano.principal}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="semestral">
              <div className="flex flex-col gap-10">
                {listaPlanosSemestral.map((plano) => (
                  <CardPlano
                    key={plano.id + plano.periodo}
                    tipo_plano={plano.tipo_plano}
                    descricao_plano={plano.descricao_plano}
                    preco={plano.preco || ""}
                    duracao={plano.duracao || ""}
                    features={plano.features}
                    noFeatures={plano.noFeatures || []}
                    periodo={plano.periodo}
                    principal={plano.principal}
                  />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Todos os planos incluem consulta inicial gratuita. Pagamentos via
            Pix e/ou Dinheiro.
          </p>
        </div>
      </div>
    </ImageBackground>
  );
}
