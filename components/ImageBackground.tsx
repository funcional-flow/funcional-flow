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
  intensidade = "70",
}: ImageBackgroundProps) {
  return (
    <div
      className={`relative flex flex-col bg-cover bg-center ${centralizado ? "justify-center" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})`, minHeight: svh + "svh" }}
    >
      <div
        className="absolute inset-0 bg-purple4"
        style={{
          opacity: Number(intensidade) / 100,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
