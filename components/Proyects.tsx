import React from "react"

import { ProyectCard } from "./ProyectCard"
import { ApolloClient, InMemoryCache } from "@apollo/client"

import { GET_ALL_PROJECTS } from "@/graphql/queries"


export const Proyects = ({post}) => {
  return (
    <div className="grid grid-cols-1  gap-4 p-8">
    
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

export async function getServerSideProps() {
  const client = new ApolloClient(
    {
      uri: "http://localhost:1337/graphql",
      cache: new InMemoryCache(),
    }
  );
  const{ data} = await client.query({
    query : GET_ALL_PROJECTS
  
})
  
  return {
    props: {
      proyectos : data.proyectos.data
    }
  }

}