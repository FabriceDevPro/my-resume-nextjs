import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-1">FABRICE MAGNAN DE BELLEVUE</h1>
      <h2 className="text-xl text-secondary mb-4">Développeur Full Stack</h2>
      <div className="flex items-center mb-2 space-x-4">
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
      <div className="mb-4 flex items-center">
        <span className="mr-2">☆</span>
        <span>Retrouvez mes recommandations professionnelles sur mon profil LinkedIn ou Portfolio</span>
      </div>
    </div>
  );
};

export default Header;
