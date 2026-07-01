import { ReactNode } from "react";

interface ImageBackgroundProps {
  imageUrl: string;
  children: ReactNode;
}

// Image Url Example inside a folder: /folder/image.jpg
// Image Url Example in root: /image.jpg

export default function ImageBackground({
  imageUrl,
  children,
}: ImageBackgroundProps) {
  return (
    <div
      className="relative min-h-[130svh] bg-cover bg-center md:min-h-svh lg:min-h-[110dvh]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-purple4/70" />

      <div className="relative z-10">{children}</div>
      
    </div>
  );
}
