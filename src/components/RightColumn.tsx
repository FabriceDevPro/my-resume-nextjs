// src/components/RightColumn.tsx
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
    <div className={`flex-grow ${isPDF ? 'p-2' : 'p-6'}`}>
      <Header />
      <Experience isPDF={isPDF} />
      <Diplomas />
      <OnlineProfiles />
    </div>
  );
};

export default RightColumn;
