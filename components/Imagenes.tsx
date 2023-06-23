import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AspectRatioDemoProps {
  source: string;
  width: number;
  height: number;
}

export function Imagenes({ source, width, height }: AspectRatioDemoProps) {
  return (
   
      <Image
        src={source}
        alt="Photo by Drew Beamer"
        width={width}
        height={height}
       
        className="rounded-md object-cover"
      />
   
  );
}
