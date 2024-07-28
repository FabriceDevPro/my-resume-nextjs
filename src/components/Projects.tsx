import React from 'react';
import projectsData from '../data/projects.json';

interface ProjectsProps {
  isPDF: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isPDF }) => {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-sm font-medium mb-2">{projectsData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      {projectsData.projects.map((project, index) => (
        <React.Fragment key={index}>
          {index === 1 && isPDF && <div className="page-break-before mb-4"></div>}
          <div className={`mb-4`}>
            <h3 className={`font-semibold mb-1 text-center ${isPDF ? 'text-[10px] leading-tight' : 'text-sm'}`}>{project.name}</h3>
            {project.subname && (
              <h3 className={`font-semibold mb-1 text-center ${isPDF ? 'text-[8px] leading-tight' : 'text-sm'}`}>{project.subname}</h3>
            )}
            <p className="text-xs my-2">{project.date}</p>
            <p className="mb-2 text-xs leading-4 my-2">{project.description}</p>
            <ul className="list-disc list-inside mb-2 text-xs leading-4">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
