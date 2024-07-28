import React from 'react';
import languagesData from '../data/languages.json';

const Languages: React.FC = () => {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-sm font-medium mb-2">{languagesData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      {languagesData.languages.map((language, index) => (
        <p key={index} className="text-xs">
          {language.name} <span className="float-right">{language.level}</span>
        </p>
      ))}
    </div>
  );
};

export default Languages;
