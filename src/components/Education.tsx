import React from 'react';
import educationData from '../data/education.json';

const Education: React.FC = () => {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-sm font-medium mb-2">{educationData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      {educationData.courses.map((course, index) => (
        <p key={index} className="text-xs">{course}</p>
      ))}
    </div>
  );
};

export default Education;
