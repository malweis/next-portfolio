import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_PROJECTS } from "@/graphql/queries";
import { ProyectCard } from './ProyectCard';// Update the import if needed

interface Proyecto {
  attributes: {
    titulo: string;
    descripcion: string;
    urlSlug: string;
    pageShow: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

interface ProyectosData {
  data: Proyecto[];
}

export default function Proyects() {
  const [proyectos, setProyectos] = useState<ProyectosData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const client = new ApolloClient({
        uri: "http://localhost:1337/graphql?populate=*",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_STRAPI}`,
        },
        cache: new InMemoryCache(),
      });
      const { data } = await client.query({
        query: GET_ALL_PROJECTS,
      });
      console.log(data)
      setProyectos(data.proyectos);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1  h-full gap-4 p-8">
      {proyectos ? (
        <>
          <div className="flex w-full flex-row gap-4">
            {proyectos.data.slice(0, 3).map((proyecto: Proyecto) => (
              <ProyectCard key={proyecto.attributes.urlSlug} proyecto={proyecto} gridLayout={false} />
            ))}
          </div>
          <div className="grid grid-cols-[2fr_1fr] gap-4">
            <div className="w-full grid grid-cols-[auto_auto_auto_auto] grid-rows-2 gap-4">
              {proyectos.data.slice(3, 11).map((proyecto: Proyecto) => (
                <ProyectCard key={proyecto.attributes.urlSlug} proyecto={proyecto} gridLayout={true} />
                ))}
            </div>
            <div className="flex w-full flex-col gap-4">
              {proyectos.data.slice(11, 15).map((proyecto: Proyecto) => (
                <ProyectCard key={proyecto.attributes.urlSlug} proyecto={proyecto} gridLayout={false} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
