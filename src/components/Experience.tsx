// src/components/Experience.tsx
import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceData from '../data/experience.json';

interface ExperienceProps {
  isPDF: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isPDF }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-normal mb-4 border-b-4 border-gray-300 pb-2">EXPÉRIENCE</h2>
      {experienceData.map((experience, index) => (
        <React.Fragment key={index}>
          <ExperienceItem 
            role={experience.role}
            period={experience.period}
            company={experience.company}
            location={experience.location}
            sections={experience.sections}
          />
          {index === 0 && isPDF && (
            <>
              <div className="page-break"></div>
              <h2 className="text-lg font-normal mb-4 border-b-4 border-gray-300 pb-2">EXPÉRIENCE</h2>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Experience;
