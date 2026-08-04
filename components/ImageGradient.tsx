import { ReactNode } from "react";

interface ImageGradientProps {
  imageUrl: string;
  children: ReactNode;
  minHeight?: string;
  posicao?: string;
}

// Image Url Example inside a folder: /folder/image.jpg
// Image Url Example in root: /image.jpg

export default function ImageGradient({
  imageUrl,
  children,
  posicao = 'bg-center',
  minHeight = "min-h-svh",
}: ImageGradientProps) {
  return (
    <div
      className={`relative ${minHeight} bg-cover ${posicao} md:min-h-svh lg:min-h-[110dvh]`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">{children}</div>

      <div className="pointer-events-none absolute -bottom-px h-100 w-full bg-linear-to-b from-transparent to-background" />
    </div>
  );
}
