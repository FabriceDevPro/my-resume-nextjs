import React from 'react';
import Profile from './Profile';
import Languages from './Languages';
import Education from './Education';
import Projects from './Projects';

const LeftColumn: React.FC = () => {
  return (
    <div className="bg-primary h-full p-6 border border-primary text-light">
      <Profile />
      <Languages />
      <Education />
      <Projects />
    </div>
  );
};

export default LeftColumn;
