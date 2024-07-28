import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Diplomas from './Diplomas';
import OnlineProfiles from './OnlineProfiles';

interface RightColumnProps {
  isPDF: boolean;
}

const RightColumn: React.FC<RightColumnProps> = ({ isPDF }) => {
  const version = '1.0.0'; // Exemple de version
  const lastUpdated = 'Juillet 2024'; // Exemple de date de mise à jour

  return (
    <div className={`flex-grow ${isPDF ? 'pt-2 pl-2 pr-2 pb-0' : 'p-6'}`}>
      <Header />
      <Experience isPDF={isPDF} />
      <Diplomas />
      <OnlineProfiles isPDF={isPDF} />
      {!isPDF && (
        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>CV réalisé avec Next.js et Tailwind CSS</p>
          <p>Version : {version}</p>
          <p>Dernière mise à jour : {lastUpdated}</p>
        </div>
      )}
    </div>
  );
};

export default RightColumn;
