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
    <div className="group hover:shadow-yellow3 rounded-2xl border border-white/10 bg-purple4 p-3 lg:p-1 xl:p-3 text-center hover:shadow lg:w-30 xl:w-40 xl:duration-300">
      {children}
      <div className="mt-1.5 text-sm leading-tight text-white/50 xl:text-xl">
        {descricao}
      </div>
    </div>
  );
}
