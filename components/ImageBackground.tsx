import { ReactNode } from "react";

interface ImageBackgroundProps {
  imageUrl: string;
  svh?: string;
  children: ReactNode;
}

// Image Url Example inside a folder: /folder/image.jpg
// Image Url Example in root: /image.jpg

export default function ImageBackground({
  imageUrl,
  children,
  svh = "130"
}: ImageBackgroundProps) {
  return (
    <div
      className={`relative bg-cover bg-center flex flex-col justify-center`}
      style={{ backgroundImage: `url(${imageUrl})`, minHeight: svh + "svh" }}
    >
      <div className="absolute inset-0 bg-purple4/70" />

      <div className="relative z-10">{children}</div>
      
    </div>
  );
}
