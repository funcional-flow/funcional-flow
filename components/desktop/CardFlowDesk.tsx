import Image from "next/image";

interface CardFlowDeskProps {
  icone: string;
  titulo: string;
  children: React.ReactNode;
}

export default function CardFlowDesk({ icone, titulo, children }: CardFlowDeskProps) {
  return (
    <div className="group shadow-purple3 relative overflow-hidden rounded-2xl p-1 shadow-lg max-w-xs">
      
      <div className="bg-purple2 absolute inset-0" />
      <div className="shine-light absolute inset-0" />

      <div className="relative rounded-2xl bg-white">
        <div className="flex flex-col px-5">
          <div className="relative flex justify-between pt-2">
            <h3 className="text-purple3 pt-5 text-xl font-semibold">
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
          <p className="mt-2 pb-3 leading-6 text-zinc-600">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
