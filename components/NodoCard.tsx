interface NodoCardProps {
  children: React.ReactNode;
}

export default function NodoCard({ children }: NodoCardProps) {
  return (
    <div className="relative z-1000 flex">
      <div className="border-yellow3 from-purple2 to-purple4 max-w-32 rounded-lg border-3 bg-linear-to-b p-3 shadow-md shadow-black">
        <p className="text-center text-sm tracking-normal text-white uppercase">
          {children}
        </p>
      </div>
    </div>
  );
}
