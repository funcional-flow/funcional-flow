// import Image from "next/image";

interface CardFlowProps {
  icone: string | React.ReactNode;
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
          <div className="flex justify-between items-center py-4">
            <h3 className="text-xl font-semibold text-purple3">{titulo}</h3>
            <div>{icone}</div>
            {/* <div className="flex h-16 w-16">
              <Image src={icone} alt="" width={64} height={64} className="w-16 h-16" />
            </div> */}
          </div>
          <p className="mt-2 leading-6 text-lg text-zinc-600 pb-3">
            {descricao}
          </p>
        </div>
      </div>
    </div>
  );
}
