import { ReactNode } from "react";

interface ImageBackgroundProps {
  imageUrl: string;
  svh?: string;
  children: ReactNode;
  centralizado?: boolean;
  intensidade?: string;
}

// Image Url Example inside a folder: /folder/image.jpg
// Image Url Example in root: /image.jpg

export default function ImageBackground({
  imageUrl,
  children,
  svh = "130",
  centralizado = true,
  intensidade = "70"
}: ImageBackgroundProps) {
  const intensidadeClass = `bg-purple4/${intensidade}`;
  return (
    <div
      className={`relative bg-cover bg-center flex flex-col ${centralizado ? 'justify-center' : ''}`}
      style={{ backgroundImage: `url(${imageUrl})`, minHeight: svh + "svh" }}
    >
      <div className={`absolute inset-0 ${intensidadeClass}`} />

      <div className="relative z-10">{children}</div>
      
    </div>
  );
}
