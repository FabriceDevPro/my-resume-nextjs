import React from 'react';
import certificationsData from '../data/certifications.json';

const Certifications: React.FC = () => {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-sm font-medium mb-2">{certificationsData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      {certificationsData.certifications.map((certification, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-xs">{certification.name}</h3>
          <p className="text-xs">{certification.organism}</p>
          <p className="text-xs">{certification.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
