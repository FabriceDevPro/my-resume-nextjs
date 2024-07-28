// src/components/PrintableComponent.tsx
import React, { forwardRef, Ref } from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const PrintableComponent = forwardRef<HTMLDivElement>((props, ref: Ref<HTMLDivElement>) => (
  <div ref={ref} className="min-h-screen bg-gray-100 flex justify-center">
    <div className="w-full max-w-screen-xl mx-auto bg-white shadow-md flex p-0"> {/* Ajout de p-0 pour supprimer le padding */}
      <div className="w-1/4 bg-primary text-light border-r border-black flex flex-col p-0"> {/* Ajustement de la largeur et suppression du padding */}
        <LeftColumn />
      </div>
      <div className="w-3/4 flex flex-col p-0"> {/* Ajustement de la largeur et suppression du padding */}
        <RightColumn />
      </div>
    </div>
  </div>
));

PrintableComponent.displayName = 'PrintableComponent';

export default PrintableComponent;
