import React from 'react';

interface ExperienceItemProps {
  role: string;
  period: string;
  company: string;
  location: string;
  sections: {
    title: string;
    details: string[];
  }[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, period, company, location, sections }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <h3 className="font-semibold">{role}</h3>
        <span>{period}</span>
      </div>
      <div className="flex justify-between mb-2 text-secondary">
        <span>{company}</span>
        <span>{location}</span>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mb-2">
          <h4 className="font-semibold italic">{section.title}</h4>
          <ul className="list-disc list-inside ml-4">
            {section.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;
