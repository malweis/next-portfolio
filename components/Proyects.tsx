import React from "react"

import { ProyectCard } from "./ProyectCard"

export const Proyects = () => {
  return (
    <div className="grid grid-cols-1  gap-4 p-8">
      {/* bento grid layout */}
      <div className="flex w-full flex-row gap-4">
        <ProyectCard gridLayout={false} />
        <ProyectCard gridLayout={false} />
        <ProyectCard gridLayout={false} />
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div className="wf grid grid-cols-[auto_auto_auto_auto] grid-rows-2 gap-4">
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
          <ProyectCard gridLayout={true} />
        </div>
        <div className="flex w-full flex-col gap-4">
          <ProyectCard gridLayout={false} />
          <ProyectCard gridLayout={false} />
          <ProyectCard gridLayout={false} />
        </div>
      </div>
    </div>
  )
}
