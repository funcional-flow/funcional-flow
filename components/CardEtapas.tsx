interface CardEtapasProps {
  numero: string;
  titulo: string;
  descricao: string;
}

export default function CardEtapas({
  numero,
  titulo,
  descricao,
}: CardEtapasProps) {
  return (
    <div className="flex">
      <h3 className="text-3xl font-bold min-w-12 tracking-widest">{numero}</h3>
      <div className="bg-yellow3 p-1" />
      <div className="flex flex-col pl-3">
        <h3 className="pb-2 font-bold text-xl">{titulo}</h3>
        <p className="">{descricao}</p>
      </div>
    </div>
  );
}
