import React from 'react';

const Diplomas: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-normal mb-4 border-b-4 border-gray-300 pb-2">DIPLÔME</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Intégrateur Web avec Mentions Très Bien</span>
          <span className="text-black">09/2023 - 06/2024</span>
        </div>
        <p className="mb-1 text-blue-500">OpenClassrooms</p>
        <p className="mb-4 text-xs leading-4">
          Compétences Obtenus : HTML, CSS, JS, React, API Rest, GIT, Visual Studio Code, Méthode Agile, Utilisation GitHub pour le Kanban
        </p>
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">DUT GEA Option Finance et Comptabilité</span>
          <span className="text-black">06/2008</span>
        </div>
        <p className="mb-1 text-blue-500">Université de Perpignan - UPVD Alumni</p>
      </div>
    </div>
  );
};

export default Diplomas;
