import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Diplomas from './Diplomas';
import OnlineProfiles from './OnlineProfiles';

interface RightColumnProps {
  isPDF: boolean;
}

const RightColumn: React.FC<RightColumnProps> = ({ isPDF }) => {
  return (
    <div className={`flex-grow ${isPDF ? 'pt-2 pl-2 pr-2 pb-0' : 'p-6'}`}>
      <Header />
      <Experience isPDF={isPDF} />
      <Diplomas />
      <OnlineProfiles isPDF={isPDF} />
    </div>
  );
};

export default RightColumn;
