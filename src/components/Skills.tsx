import React from 'react';
import skillsData from '../data/skills.json';

interface SkillsProps {
  isPDF: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isPDF }) => {
  return (
    <div className={`mb-8 text-white ${isPDF ? 'mt-8' : ''}`}>
      <h2 className="text-sm font-medium mb-2">{skillsData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      <ul className="list-disc list-inside">
        {skillsData.skills.map((skill, index) => (
          <li key={index} className="text-xs">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
