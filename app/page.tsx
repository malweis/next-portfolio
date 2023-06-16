import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainInfo } from "@/components/MainInfo"
import { SiteData } from "@/components/SiteData"
import { Proyects } from "@/components/Proyects"
import { ExtraInfo } from "@/components/ExtraInfo"
import { Contac } from "@/components/Contac"
import { Navegacion } from "@/components/Navegacion"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Navegacion/>
      <MainInfo/>
      <SiteData/>
      <Proyects/>
      <ExtraInfo/>
      <Contac/>
    </section>
  )
}
