import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Diplomas from './Diplomas';

const RightColumn: React.FC = () => {
  return (
    <div className="h-full p-6">
      <Header />
      <Experience />
      <Diplomas />
    </div>
  );
};

export default RightColumn;
