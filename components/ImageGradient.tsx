import { ReactNode } from "react";

interface ImageGradientProps {
  imageUrl: string;
  desktopImageUrl?: string;
  children: ReactNode;
  minHeight?: string;
  posicao?: string;
}

// Image Url Example inside a folder: /folder/image.jpg
// Image Url Example in root: /image.jpg

export default function ImageGradient({
  imageUrl,
  desktopImageUrl,
  children,
  posicao = "bg-[center_100%]",
  minHeight = "min-h-svh",
}: ImageGradientProps) {
  return (
    <div className={`relative ${minHeight} overflow-hidden`}>
      {/* Fumaça */}
      <div className="pointer-events-none absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover mix-blend-screen"
        >
          <source src="/hero/fumaca.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={`absolute inset-0 bg-cover ${posicao} lg:hidden`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div
        className={`absolute inset-0 hidden bg-cover ${posicao} md:block`}
        style={{
          backgroundImage: `url(${desktopImageUrl})`,
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">{children}</div>

      <div className="to-background pointer-events-none absolute -bottom-px h-100 w-full bg-linear-to-b from-transparent" />
    </div>
  );
}
