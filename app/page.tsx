import Hero from "@/widgets/Hero";
import Sobre from "@/widgets/Sobre";
import Planos from "@/widgets/Planos";
import Resultados from "@/widgets/Resultados";
import Beneficios from "@/widgets/Beneficios";
import Funcionamento from "@/widgets/Funcionamento";
import Faq from "@/widgets/Faq";
import Publico from "@/widgets/Publico";
import Diferenciais from "@/widgets/Diferenciais";
import Cta from "@/widgets/Cta";
import ImageGradient from "@/components/ImageGradient";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">{/* <Navbar /> */}</header>
      <main className="container mx-auto flex flex-col gap-10">
        <section id="hero" className="">
          <ImageGradient imageUrl="/hero/hero1.png" minHeight="min-h-[100svh]">
            <Hero />
          </ImageGradient>
        </section>
        <section id="beneficios" className="relative">
          <Beneficios />
        </section>
        <section id="funcionamento" className="bg-purple4 relative">
          <Funcionamento />
        </section>
        <section id="diferenciais" className="relative">
          <Diferenciais />
        </section>
        <section id="resultados" className="relative">
          <Resultados />
        </section>
        <section id="publico" className="relative bg-purple4 text-white">
          <Publico />
        </section>
        <section id="sobre" className="relative">
          <Sobre />
        </section>
        <section id="planos" className="relative bg-purple4 text-white">
          <Planos />
        </section>
        <section id="faq" className="relative">
          <Faq />
        </section>
        <section id="cta" className="relative bg-purple4 text-white py-10">
          <Cta />
        </section>
      </main>
      <footer className="container mx-auto">
        <div className="z-1000 text-3xl font-bold text-black">Footer</div>
        <p>Contatos</p>
      </footer>
    </>
  );
}
