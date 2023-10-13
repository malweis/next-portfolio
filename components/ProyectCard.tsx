import React, { useState } from 'react';
import { Button } from './ui/button';

interface ProyectCardProps {
  gridLayout?: boolean;
}

export const ProyectCard = ({ gridLayout }: ProyectCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const cardHeightClass = gridLayout ? 'h-full' : 'h-64';

  return (
    <div
      className={`relative bg-[url('../public/proyectos/proyecto1.png')] bg-cover bg-no-repeat bg-bottom ${cardHeightClass} w-full hfrounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div
        className={`${
          showDescription ? 'opacity-100' : 'opacity-0'
        } absolute top-0 left-0 right-0 bottom-0 h-full gap-2 w-full bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-500`}
      >
        <div className='w-full h-full flex items-end p-4'>
          <div className='w-full flex flex-col'>
            <div className='flex w-full'>
              <div className="text-base text-primary flex-1 flex items-end h-8 font-bold">Descripcion del proyecto</div>
              <div className="flex flex-row gap-4 text-primary text-base justify-end items-end flex-1 h-8 ">Nextjs - Hygraph - GraphQl</div>
            </div>
            <Button variant={"default"} className='w-2/4 text-background'>Mas informacion</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
