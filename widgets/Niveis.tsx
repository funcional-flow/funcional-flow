"use client";

// Import Swiper styles
import "swiper/css";
import TituloSessao from "@/components/TituloSessao";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import CardNiveis from "@/components/CardNiveis";
import { iniciante, intermediario, avancado } from "@/data/list_niveis";

export default function Niveis() {
  return (
    <div className="relative flex flex-col px-6">
      {/* Eyebrow */}
      <TituloSessao centralizado={true} className="pb-3">
        <BottomUpLetters triggerOnView={true}>
          descubra seu nivel
        </BottomUpLetters>
      </TituloSessao>
      <h2 className="text-purple3 pb-3 text-center text-3xl font-bold">
        <span className="uppercase">
          A evolução começa quando você entende o seu ponto de partida
        </span>
      </h2>
      <p className="pb-6 text-sm md:text-lg text-black/65">
        <BlurOutUp delay={500} triggerOnView={true}>
          Cada fase possui desafios específicos, prioridades diferentes e
          capacidades que precisam ser desenvolvidas antes do próximo passo.
          Quando o treinamento respeita essa progressão, a evolução acontece de
          forma mais rápida, eficiente e sustentável.
        </BlurOutUp>
      </p>

      <Tabs defaultValue="iniciante">
        <div className="relative mx-auto flex w-full flex-col md:max-w-md">
          <TabsList className="bg-purple3 mx-auto mb-7 rounded-lg">
            <TabsTrigger value="iniciante" className={"text-white"}>
              Iniciante
            </TabsTrigger>
            <TabsTrigger value="intermediario" className={"text-white"}>
              Intermediário
            </TabsTrigger>
            <TabsTrigger value="avancado" className={"text-white"}>
              Avançado
            </TabsTrigger>
          </TabsList>
          <TabsContent value="iniciante">
            <div className="flex flex-col gap-6">
              {iniciante.map((nivel, index) => (
                <div key={index}>
                  <CardNiveis
                    numero={nivel.numero}
                    titulo={nivel.titulo}
                    descricao={nivel.descricao}
                    imagem={nivel.imagem}
                    inicio={nivel.inicio || false}
                    ultimo={nivel.ultimo || false}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="intermediario">
            <div className="flex flex-col gap-6">
              {intermediario.map((nivel, index) => (
                <div key={index}>
                  <CardNiveis
                    numero={nivel.numero}
                    titulo={nivel.titulo}
                    descricao={nivel.descricao}
                    imagem={nivel.imagem}
                    inicio={nivel.inicio || false}
                    ultimo={nivel.ultimo || false}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="avancado">
            <div className="flex flex-col gap-6">
              {avancado.map((nivel, index) => (
                <div key={index}>
                  <CardNiveis
                    numero={nivel.numero}
                    titulo={nivel.titulo}
                    descricao={nivel.descricao}
                    imagem={nivel.imagem}
                    inicio={nivel.inicio || false}
                    ultimo={nivel.ultimo || false}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
      {/* <div className="flex flex-col gap-6">
        {avancado.map((nivel, index) => (
          <div key={index}>
            <CardNiveis
              numero={nivel.numero}
              titulo={nivel.titulo}
              descricao={nivel.descricao}
              imagem={nivel.imagem}
              inicio={nivel.inicio || false}
              ultimo={nivel.ultimo || false}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

{
  /* <div className="relative h-svh w-full">
        <Image
          src="/categorias/iniciante2.png"
          alt="Categoria"
          fill
          className="object-contain"
        />
      </div> */
}
