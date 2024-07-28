// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="mb-2"> {/* Réduire le margin-bottom */}
      <h1 className="text-2xl font-bold mb-1">FABRICE MAGNAN DE BELLEVUE</h1> {/* Réduire la taille de la police */}
      <h2 className="text-lg text-secondary mb-2">Développeur Full Stack</h2> {/* Réduire la taille de la police */}
      <div className="flex items-center mb-1 space-x-4"> {/* Réduire le margin-bottom */}
        <div className="flex items-center">
          <span className="mr-2">📞</span>
          <span>06 78 61 47 00</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">✉️</span>
          <span>magnan.fabrice@gmail.com</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">📍</span>
          <span>Bourg-Saint-Bernard</span>
        </div>
      </div>
      <div className="mb-2 flex items-center"> {/* Réduire le margin-bottom */}
        <span className="mr-2">☆</span>
        <span>Retrouvez mes recommandations professionnelles sur mon profil LinkedIn ou Portfolio</span>
      </div>
    </div>
  );
};

export default Header;
