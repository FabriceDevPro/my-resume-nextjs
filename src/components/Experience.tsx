import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceData from '../data/experience.json';

interface ExperienceProps {
  isPDF: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isPDF }) => {
  return (
    <div className="mb-4">
      <h2 className={`text-lg font-normal mb-4 border-b-4 border-gray-300 pb-2 ${isPDF ? 'mt-8' : ''}`}>EXPÉRIENCE</h2> {/* Ajouter un espace au-dessus pour l'impression */}
      {experienceData.map((item, index) => (
        <React.Fragment key={index}>
          {index === 1 && <div className="page-break-before" />} {/* Saut de page après le premier élément */}
          {index === 1 && isPDF && (
            <h2 className="text-lg font-normal mb-4 border-b-4 border-gray-300 pb-2 mt-4">EXPÉRIENCE</h2>
          )}
          <ExperienceItem
            role={item.role}
            period={item.period}
            company={item.company}
            location={item.location}
            sections={item.sections}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Experience;
