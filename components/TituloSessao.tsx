import { cn } from "@/lib/utils";

interface TituloSessaoProps {
  children: React.ReactNode;
  centralizado?: boolean;
  escuro?: boolean;
  className?: string;
}

export default function TituloSessao({
  children,
  centralizado = true,
  escuro = true,
  className = "",
}: TituloSessaoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 tracking-[0.15em]",
        centralizado ? "justify-center" : "",
        className
      )}
    >
      <div className={`h-px w-7 ${escuro ? "bg-purple3" : "bg-yellow3"}`} />
      <h3
        className={`text-center md:text-2xl text-xs font-semibold uppercase ${escuro ? "text-purple3" : "text-yellow3"} ${centralizado ? "text-center" : "text-start"}`}
      >
        {children}
      </h3>
      {centralizado && (
        <div className={`h-px w-7 ${escuro ? "bg-purple3" : "bg-yellow3"}`} />
      )}
    </div>
  );
}
