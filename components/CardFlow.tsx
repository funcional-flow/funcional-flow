import Image from "next/image";

interface CardFlowProps {
  icone: string;
  titulo: string;
  descricao: string;
}

export default function CardFlow({ icone, titulo, descricao }: CardFlowProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-1 shadow-xl">
      <div className="bg-purple2 absolute inset-0" />

      <div className="shine-light absolute inset-0" />

      <div className="relative rounded-2xl bg-white">
        <div className="flex flex-col px-5">
          <div className="relative flex justify-between pt-2">
            <h3 className="text-purple3 text-xl font-semibold pt-5">{titulo}</h3>
            <div className="h-16 w-16">
              <Image
                src={`/beneficios/${icone}`}
                alt=""
                width={128}
                height={128}
                className="animate-icone-beneficioss"
              />
            </div>
          </div>
          <p className="mt-2 pb-3 leading-6 text-zinc-600">{descricao}</p>
        </div>
      </div>
    </div>
  );
}
