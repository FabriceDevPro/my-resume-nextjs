import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-sm font-medium mb-2">PROJETS</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      <div className="mb-4">
        <h3 className="font-semibold text-sm mb-1">Gestion des Comptes Personnels (Format Web)</h3>
        <p className="text-xs mb-1">07/2023 - Présent</p>
        <p className="mb-2 text-xs leading-4">
          {`En prévision de ma formation et pour pratiquer, j'ai choisi de transformer la version Excel
          VBA en format Web. Cela permettra une plus grande flexibilité, de le rendre plus esthétique
          et d'augmenter la capacité des utilisateurs.`}
        </p>
        <ul className="list-disc list-inside mb-2 text-xs leading-4">
          <li>Utilisation de React et Redux pour le frontend</li>
          <li>{`Création d'une API Sécurisée avec le Framework Laravel pour PHP`}</li>
          <li>Hébergement du projet sur mon NAS Synology</li>
          <li>Création de mon propre serveur de mail sur mon NAS</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1">Gestion des Comptes Personnels (VBA Excel)</h3>
        <p className="text-xs mb-1">01/2019 - Présent</p>
        <p className="mb-2 text-xs leading-4">
          {`Création d'un outil sous Excel VBA pour la gestion quotidienne de mes comptes bancaires, lié
          à une base de données. Possibilité de l'utiliser à plusieurs et de gérer des comptes communs,
          avec sauvegarde automatique.`}
        </p>
        <ul className="list-disc list-inside text-xs leading-4">
          <li>Utilisation de VBA sous Excel</li>
          <li>{`Utilisation d'une base de données sous Access`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
