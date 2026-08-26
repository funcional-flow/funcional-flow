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
import BeneficiosDesk from "@/widgets/desktop/BeneficiosDesk";
import FuncionamentoDesk from "@/widgets/desktop/FuncionamentoDesk";
import PlanosDesk from "@/widgets/desktop/PlanosDesk";
import PublicoDesk from "@/widgets/desktop/PublicoDesk";

export default function MobilePage() {
  return (
    <>
      <header className="container mx-auto">{/* <Navbar /> */}</header>
      <main className="flex flex-col">
        <section id="hero" className="relative overflow-hidden">
          <ImageGradient
            imageUrl="/hero/hero.png"
            desktopImageUrl="/hero/hero_desktop.png"
            minHeight="min-h-svh"
            posicao="bg-[right_top]"
          >
            <Hero />
          </ImageGradient>
        </section>
        <section
          id="beneficios"
          className="relative overflow-hidden lg:sticky lg:-top-6 lg:z-0"
        >
          <div className="relative lg:hidden">
            <Beneficios />
          </div>
          <div className="relative hidden lg:block">
            <BeneficiosDesk />
          </div>
        </section>
        <section
          id="resultados"
          className="bg-purple4 relative overflow-hidden py-12 text-white lg:z-20 xl:py-20"
        >
          <Resultados />
        </section>
        <section id="diferenciais" className="snap-proximity relative z-20">
          <Diferenciais />
        </section>
        <section id="funcionamento" className="relative z-20 overflow-hidden">
          <div className="relative lg:hidden">
            <Funcionamento />
          </div>
          <div className="relative hidden lg:block">
            <FuncionamentoDesk />
          </div>
        </section>
        <section
          id="sobre"
          className="bg-background relative z-20 overflow-hidden"
        >
          <Sobre />
        </section>
        {/* <section className="bg-purple4 z-20">
          <BentoGallery />
        </section> */}
        <section id="publico" className="bg-purple4 relative z-20 text-white">
          <div className="relative lg:hidden">
            <Publico />
          </div>
          <div className="relative hidden lg:block">
            <PublicoDesk />
          </div>
        </section>
        <section id="niveis" className="bg-background relative z-20 py-12 xl:py-20">
          <Niveis />
        </section>
        <section
          id="planos"
          className="bg-purple4 relative z-20 overflow-hidden text-white"
        >
          <div className="relative lg:hidden">
            <Planos />
          </div>
          <div className="relative hidden lg:block">
            <PlanosDesk />
          </div>
        </section>
        <section
          id="faq"
          className="bg-background relative z-20 overflow-hidden py-12"
        >
          <Faq />
        </section>
        <section
          id="cta"
          className="bg-purple4 relative z-20 overflow-hidden px-6 py-12 text-white"
        >
          <Cta />
        </section>
      </main>
      <footer className="relative bg-gray-500 text-white">
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
        <Footer />
      </footer>
    </>
  );
}
