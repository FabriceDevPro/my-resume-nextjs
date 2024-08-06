import React from 'react';

interface SectionDetail {
  title: string;
  items: string[];
}

interface ExperienceSection {
  role: string;
  period: string;
  company: string;
  location: string;
  sections: {
    subtitle: string;
    details: SectionDetail[];
  }[];
}

const ExperienceItem: React.FC<ExperienceSection> = ({ role, period, company, location, sections }) => {
  return (
    <div className="mb-4 p-2 border border-gray-300 rounded-lg shadow-sm bg-white text-xs">
      <div className="flex justify-between mb-1">
        <h3 className="font-semibold text-sm">{role}</h3>
        <span>{period}</span>
      </div>
      <div className="flex justify-between mb-2 text-xs">
        <span className="text-blue-500">{company}</span>
        <span className="text-black">{location}</span>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mb-2">
          <h4 className="font-semibold italic underline mb-1 text-xs">{section.subtitle}</h4>
          {section.details.map((detail, idx) => (
            <div key={idx} className="mb-1">
              <h5 className="font-semibold text-xs">{detail.title}</h5>
              <ul className="list-disc list-inside ml-2">
                {detail.items.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;
