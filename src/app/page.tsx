// src/app/page.tsx
'use client';

import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import ClientOnly from '../components/ClientOnly';
import PrintButton from '../components/PrintButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-screen-xl mx-auto bg-white shadow-md flex">
        <div className="w-1/4 bg-primary text-light border-r border-black flex flex-col">
          <LeftColumn />
        </div>
        <div className="w-3/4 flex flex-col text-xs p-4"> {/* Réduire la taille de police pour la colonne droite */}
          <RightColumn />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <ClientOnly>
          <PrintButton />
        </ClientOnly>
      </div>
    </div>
  );
}
