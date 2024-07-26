import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Diplomas from './Diplomas';
import OnlineProfiles from './OnlineProfiles';

const RightColumn: React.FC = () => {
  return (
    <div className="flex-grow p-6">
      <Header />
      <Experience />
      <Diplomas />
      <OnlineProfiles />
    </div>
  );
};

export default RightColumn;
