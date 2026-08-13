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
import Niveis from "@/widgets/Niveis";
import Footer from "@/widgets/Footer";

export default function MobilePage() {
  return (
    <>
      <header className="container mx-auto">{/* <Navbar /> */}</header>
      <main className="flex flex-col overflow-hidden">
        <section id="hero" className="relative">
          <ImageGradient
            imageUrl="/hero/hero.png"
            desktopImageUrl="/hero/hero_desktop.png"
            minHeight="min-h-svh"
            posicao="bg-[right_top]"
          >
            <Hero />
          </ImageGradient>
        </section>
        <section id="beneficios" className="relative px-6 py-12 md:py-20">
          <Beneficios />
        </section>
        <section id="funcionamento" className="relative">
          <Funcionamento />
        </section>
        <section id="diferenciais" className="relative px-6 py-12">
          <Diferenciais />
        </section>
        <section
          id="resultados"
          className="bg-purple4 relative py-12 text-white"
        >
          <Resultados />
        </section>
        <section id="sobre" className="relative px-6 py-12">
          <Sobre />
        </section>
        <section id="publico" className="bg-purple4 relative text-white">
          <Publico />
        </section>
        <section id="niveis" className="relative py-12">
          <Niveis />
        </section>
        <section id="planos" className="bg-purple4 relative text-white">
          <Planos />
        </section>
        <section id="faq" className="relative py-12">
          <Faq />
        </section>
        <section id="cta" className="bg-purple4 relative px-6 py-12 text-white">
          <Cta />
        </section>
      </main>
      <footer className="relative overflow-hidden bg-gray-500 text-white">
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
        <Footer />
        {/* <div className="z-1000 text-3xl font-bold text-black">Footer</div>
        <p>Contatos</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://portfolio-rm-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Renato Monteiro
          </a>
        </p> */}
      </footer>
    </>
  );
}
