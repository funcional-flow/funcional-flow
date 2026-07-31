interface NodoCardProps {
  texto: string;
  ref: React.RefObject<HTMLDivElement>;
}

export default function NodoCard({ texto, ref }: NodoCardProps) {
  return (
    <div className="relative flex z-1000" ref={ref}>
      <div className="border-yellow3 from-purple2 to-purple4 max-w-32 rounded-lg border-3 bg-linear-to-b p-3 shadow-md shadow-black">
        <p className="text-center text-sm tracking-normal text-white uppercase">
          {texto}
        </p>
      </div>
    </div>
  );
}
