import React from "react"

import { Imagenes } from "./Imagenes"

export const SiteData = () => {
  return (
    <div className=" slider w-full">
      <div className="slidetrack">
        <div className="slide">
          <Imagenes
            source="/iconos/react-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="slide">
          {" "}
          <Imagenes
            source="/iconos/vite-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="slide">
          {" "}
          <Imagenes
            source="/iconos/next-dot-js-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="slide">
          {" "}
          <Imagenes
            source="/iconos/tailwind-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="slide">
          {" "}
          <Imagenes
            source="/iconos/java-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="slide">
          {" "}
          <Imagenes
            source="/iconos/spring-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="slide">
          {" "}
          <Imagenes
            source="/iconos/postgresql-svgrepo-com.svg"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  )
}
