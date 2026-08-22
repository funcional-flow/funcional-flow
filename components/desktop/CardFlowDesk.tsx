import Image from "next/image";

interface CardFlowDeskProps {
  icone: string;
  titulo: string;
  children: React.ReactNode;
}

export default function CardFlowDesk({
  icone,
  titulo,
  children,
}: CardFlowDeskProps) {
  return (
    <div className="group shadow-purple3 hover:shadow-yellow3 relative max-w-2xs overflow-hidden rounded-2xl p-1 shadow-lg duration-200 hover:z-1000 hover:scale-105 xl:max-w-md">
      <div className="bg-purple2 group-hover:bg-yellow3 absolute inset-0" />
      <div className="shine-light absolute inset-0" />

      {/* Conteudo */}
      <div className="relative rounded-2xl bg-white">
        <div className="flex flex-col px-5">
          <div className="relative flex justify-between pt-2">
            <h3 className="group-hover:text-yellow3 text-purple3 pt-5 text-lg font-semibold duration-200 xl:text-3xl">
              {titulo}
            </h3>
            <div className="h-16 w-16">
              <Image
                src={`/beneficios/${icone}`}
                alt=""
                width={128}
                height={128}
                className=""
              />
            </div>
          </div>
          <p className="mt-2 pb-3 text-base leading-6 text-zinc-600 xl:text-2xl xl:leading-9 xl:tracking-wide xl:text-zinc-500">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
