import React from 'react';
import Profile from './Profile';
import Languages from './Languages';
import Education from './Education';
import Projects from './Projects';

interface LeftColumnProps {
  isPDF: boolean;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ isPDF }) => {
  return (
    <div className={`flex flex-col justify-between h-full bg-primary text-light ${isPDF ? 'p-4' : ''}`}>
      <div>
        <Profile />
        <Languages />
        <Education />
        <Projects isPDF={isPDF} />
      </div>
    </div>
  );
};

export default LeftColumn;
