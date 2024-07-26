import React from 'react';
import Profile from './Profile';
import Languages from './Languages';
import Education from './Education';
import Projects from './Projects';

const LeftColumn: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full p-6">
      <div>
        <Profile />
        <Languages />
        <Education />
        <Projects />
      </div>
    </div>
  );
};

export default LeftColumn;
