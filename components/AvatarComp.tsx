import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarfoto from '../public/avatar.jpg';
import { StaticImageData } from "next/image";

export interface foto {
  src: string | StaticImageData;
  className?: string;
}

export function AvatarComp() {
  const avatarSrc: string = typeof avatarfoto === 'string' ? avatarfoto : avatarfoto.src;
  
  return (
    <Avatar className="Avimage" >
      <AvatarImage src={avatarSrc} alt="@malweis" />
      <AvatarFallback>Malweis</AvatarFallback>
    </Avatar>
  );
}
