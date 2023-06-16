export type SiteConfig = typeof siteConfig
import { Icons } from "@/components/icons"


export const siteConfig = {
  name: "Portfolio",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
  
    {
      title: "Proyectos",
      href: "/proyectos",
     
    },
    {
      title: "Conocimientos",
      href: "/conocimientos",
    
    },
    {
      title: "Contacto",
      href: "/contacto",
  
    },
   
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/OscarGonzalez97/buscamascota",
    docs: "https://ui.shadcn.com",
  },
}
