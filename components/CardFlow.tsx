import { Dumbbell } from "lucide-react";

export default function CardFlow() {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-1">
      <div className="bg-purple2 absolute inset-0" />

      <div className="shine-light absolute inset-0" />

      <div className="relative rounded-2xl bg-white p-5">
        <div className="flex gap-4 rounded-2xl">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-yellow-100">
            <Dumbbell className="h-10 w-10 text-yellow-600" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Treino personalizado</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Treinos criados de acordo com o seu nível atual. Garantindo que
              cada exercício seja eficiente para você naquele momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
