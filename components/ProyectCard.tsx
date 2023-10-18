import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

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

interface ProyectCardProps {
  gridLayout?: boolean;
  proyecto: Proyecto;
}

export const ProyectCard = ({ gridLayout, proyecto }: ProyectCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const cardHeightClass = gridLayout ? 'h-full' : 'h-64';
  const changeFlexClass = gridLayout ? 'flex-col' : '';
 
  


  const backgroundImageURL = proyecto.attributes.pageShow?.data?.[0]?.attributes?.url;
 

  return (
    <div
    
      style={backgroundImageURL ? { backgroundImage: `url('http://localhost:1337${backgroundImageURL}')` } : {}}
      className={`relative bg-cover bg-no-repeat bg-bottom ${cardHeightClass} w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:z-50 hover:scale-110`}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
 

      <div
        className={`${
          showDescription ? 'opacity-100' : 'opacity-0'
        } absolute top-0 left-0 right-0 bottom-0 h-full gap-2 w-full bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-500`}
      >
        <div className={`w-full h-full flex items-end ${gridLayout ? "p-10" : "p-4"} `}>
          <div className='w-full flex flex-col'>
            <div className={`flex  ${changeFlexClass}  w-full`}>
              <div className="text-base text-primary flex-1 flex items-end h-8 font-bold">
                {proyecto.attributes.titulo}
              </div>
              <div className="flex flex-row gap-4 text-primary text-base justify-end items-end flex-1 h-8">
                Nextjs - Hygraph - GraphQl
              </div>
            </div>
            <Button variant={"default"} className={`text-background whitespace-nowrap ${gridLayout ? "w-full" : "w-2/4 "}  `}>
              Mas informacion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
