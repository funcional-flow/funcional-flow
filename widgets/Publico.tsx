import ImageBackground from "@/components/ImageBackground";

export default function Publico() {
  return (
    <ImageBackground imageUrl="/publico/1.jpg" svh="120">
      <div>
        <h2 className="font-semibold text-2xl">Pra quem é a Mentoria?</h2>
        <p>Para quem quer perder peso</p>
        <p>ganhar massa muscular</p>
        <p>melhorar condicionamento físico</p>
        <p>voltar a treinar</p>
        <p>se preparar pra competições</p>
      </div>
    </ImageBackground>
  )
}