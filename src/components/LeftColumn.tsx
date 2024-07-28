import React from 'react';
import Profile from './Profile';
import Languages from './Languages';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import Skills from './Skills';

interface LeftColumnProps {
  isPDF: boolean;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ isPDF }) => {
  return (
    <div className={`flex flex-col justify-between h-full bg-primary text-light ${isPDF ? 'p-4 print-column' : 'print-column'}`}>
        <Profile />
        <Languages />
        <Education />
        <Certifications />
        {isPDF && <div className="page-break"></div>}
        <Skills isPDF={isPDF} />
        <Projects isPDF={isPDF} />
    </div>
  );
};

export default LeftColumn;
