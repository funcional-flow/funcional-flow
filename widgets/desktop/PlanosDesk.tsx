import {
  listaPlanosMensal,
  listaPlanosTrimestral,
  listaPlanosSemestral,
} from "@/data/list_data_plans";
import ImageBackground from "@/components/ImageBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import TituloSessao from "@/components/TituloSessao";
import CardPlanoDesk from "@/components/desktop/CardPlanoDesk";

export default function PlanosDesk() {
  return (
    <ImageBackground
      imageUrl="/planos/bg-planos5.jpg"
      centralizado={false}
      svh="100"
      intensidade="97.5"
    >
      <div className="mx-6 flex flex-col gap-3 py-12 xl:py-20">
        <TituloSessao escuro={false} centralizado={true} className="">
          <BottomUpLetters triggerOnView={true}>PLANOS</BottomUpLetters>
        </TituloSessao>
        <h1 className="text-center text-4xl xl:text-5xl">
          <BlurOutUp delay={500} triggerOnView={true}>
            ESCOLHA O SEU
          </BlurOutUp>{" "}
          <span className="text-yellow3 font-bold tracking-wider">
            <BottomUpLetters triggerOnView={true}>PLANO</BottomUpLetters>
          </span>
        </h1>
        <p className="pb-4 text-sm text-gray-300 md:text-center md:text-base xl:text-xl">
          <BlurOutUp delay={500} triggerOnView={true}>
            Decida o plano que melhor se adapta à sua rotina e comece a
            desenvolver um corpo mais forte e atlético através do método
            Funcional Flow.
          </BlurOutUp>
        </p>
        <Tabs defaultValue="semestral">
          <div className="relative flex flex-col">
            <TabsList className="mx-auto mb-7 rounded-sm bg-purple-100/20 px-2 outline">
              <TabsTrigger
                value="mensal"
                className={"hover:text-yellow3 text-lg text-white"}
              >
                Mensal
              </TabsTrigger>
              <TabsTrigger
                value="trimestral"
                className={"hover:text-yellow3 text-lg text-white"}
              >
                Trimestral
              </TabsTrigger>
              <TabsTrigger
                value="semestral"
                className={"hover:text-yellow3 text-lg text-white"}
              >
                Semestral
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mensal">
              <div className="mx-auto flex items-center lg:w-3xl lg:gap-10 xl:w-5xl">
                {listaPlanosMensal.map((plano) => (
                  <CardPlanoDesk
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
              <div className="mx-auto flex items-center lg:w-3xl lg:gap-10 xl:w-5xl">
                {listaPlanosTrimestral.map((plano) => (
                  <CardPlanoDesk
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
              <div className="mx-auto flex items-center lg:w-3xl lg:gap-10 xl:w-5xl">
                {listaPlanosSemestral.map((plano) => (
                  <CardPlanoDesk
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
        <p className="mt-6 text-center text-sm text-gray-400 xl:mt-9 xl:text-lg">
          Todos os planos incluem uma semana gratuita para experienciar o
          método. Pagamentos via Cartão de crédito e Pix.
        </p>
      </div>
    </ImageBackground>
  );
}
