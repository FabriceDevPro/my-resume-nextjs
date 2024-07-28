import React from 'react';
import certificationsData from '../data/certifications.json';

interface SkillsProps {
  isPDF: boolean;
}

const Certifications: React.FC<SkillsProps> = ({ isPDF }) => {
  return (
    <div className={`mb-8 text-white ${isPDF ? 'mt-8' : ''}`}>
      <h2 className="text-sm font-medium mb-2">{certificationsData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      {certificationsData.certifications.map((certification, index) => (
        <div key={index} className="mb-4 text-xs">
          <h3 className="font-semibold">{certification.name}</h3>
          <p>{certification.organism}</p>
          <p>{certification.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
