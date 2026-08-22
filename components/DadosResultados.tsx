import React from "react";

interface DadosResultadosProps {
  children: React.ReactNode;
  descricao: string;
}

export default function DadosResultados({
  children,
  descricao,
}: DadosResultadosProps) {
  return (
    <div className="group xl:duration-300 hover:shadow-yellow3 w-40 rounded-2xl border border-white/10 bg-white/3 p-3 text-center hover:shadow">
      {children}
      <div className="mt-1.5 text-sm leading-tight text-white/50 xl:text-xl">
        {descricao}
      </div>
    </div>
  );
}
