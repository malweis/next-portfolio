"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainInfo } from "@/components/MainInfo"
import { SiteData } from "@/components/SiteData"
import Proyects from "@/components/Proyects"
import { ExtraInfo } from "@/components/ExtraInfo"
import { Contac } from "@/components/Contac"
import { Navegacion } from "@/components/Navegacion"

export default function IndexPage() {
  return (
    <section className=" w-full grid  ">
      <div className="h-full  w-full justify-self-center grid place-content-center  heads">
      
        <Navegacion className="place-self-center  border-none bg-inherit "/>
       
        </div>
        <div className="flex justify-center"><MainInfo/></div>
      <SiteData/>
      <Proyects/>
      <ExtraInfo/>
      <Contac/>
    </section>
  )
}
