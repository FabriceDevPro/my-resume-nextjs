import React from 'react';
import diplomaData from '../data/diplomas.json';

const Diplomas: React.FC = () => {
  return (
    <div className="mb-3">
      <h2 className="text-xl font-normal mb-4 border-b-4 border-gray-300 pb-2">{diplomaData.title}</h2>
      {diplomaData.diplomas.map((diploma, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-semibold">{diploma.degree}</span>
            <span className="text-black">{diploma.period}</span>
          </div>
          <p className="mb-1 text-blue-500">{diploma.institution}</p>
          {diploma.skills && (
            <p className="mb-4 text-xs leading-4">
              {diploma.skills}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Diplomas;
