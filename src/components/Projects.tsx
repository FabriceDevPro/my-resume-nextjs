import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2">PROJETS</h2>
      <h3 className="font-semibold">Gestion des Comptes Personnels (Format Web)</h3>
      <p className="text-sm">07/2023 - Présent</p>
      <p className="mb-4">
        {`En prévision de ma formation et pour pratiquer, j'ai choisi de transformer la version Excel
        VBA en format Web. Cela permettra une plus grande flexibilité, de le rendre plus esthétique
        et d'augmenter la capacité des utilisateurs.`}
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Utilisation de React et Redux pour le frontend</li>
        <li>{`Création d'une API Sécurisée avec le Framework Laravel pour PHP`}</li>
        <li>Hébergement du projet sur mon NAS Synology</li>
        <li>Création de mon propre serveur de mail sur mon NAS</li>
      </ul>
      <h3 className="font-semibold">Gestion des Comptes Personnels (VBA Excel)</h3>
      <p className="text-sm">01/2019 - Présent</p>
      <p className="mb-4">
        {`Création d'un outil sous Excel VBA pour la gestion quotidienne de mes comptes bancaires, lié
        à une base de données. Possibilité de l'utiliser à plusieurs et de gérer des comptes communs,
        avec sauvegarde automatique.`}
      </p>
      <ul className="list-disc list-inside">
        <li>Utilisation de VBA sous Excel</li>
        <li>{`Utilisation d'une base de données sous Access`}</li>
      </ul>
    </div>
  );
};

export default Projects;
