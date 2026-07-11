interface BordaGradienteProps {
  children: React.ReactNode;
  colorFrom?: string;
  colorTo?: string;
  backgroundColor?: string;
}

export default function BordaGradiente({
  children,
  colorFrom = "from-yellow1",
  colorTo = "to-purple3",
  backgroundColor = "purple4",
}: BordaGradienteProps) {
  return (
    <div
      className={`${colorFrom} ${colorTo} rounded-md bg-linear-to-br p-px`}
    >
      <div className={`rounded-md bg-${backgroundColor} p-2`}>{children}</div>
    </div>
  );
}
