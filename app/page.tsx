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
      <main className="container mx-auto flex flex-col gap-10 font-teko tracking-wide">
        <section id="hero" className="">
          <ImageGradient imageUrl="/hero/2.jpg">
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
        <section id="publico" className="relative">
          <Publico />
        </section>
        <section id="sobre" className="relative">
          <Sobre />
        </section>
        <section className="relative">
          <Resultados />
        </section>
        <section className="relative">
          <Planos />
        </section>
        <section className="relative">
          <Faq />
        </section>
        <section className="relative">
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
