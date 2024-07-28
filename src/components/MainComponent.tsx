import React, { forwardRef, Ref } from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

interface MainComponentProps {
  isPDF: boolean;
}

const MainComponent = forwardRef<HTMLDivElement, MainComponentProps>(({ isPDF }, ref) => (
  <div ref={ref} className={`min-h-screen flex justify-center ${isPDF ? '' : 'bg-gray-100 items-center'}`}>
    <div className={`w-full max-w-screen-xl mx-auto bg-white shadow-md flex ${isPDF ? 'p-0' : ''}`}>
      <div className={`w-1/4 bg-primary text-light border-r border-black flex flex-col ${isPDF ? 'p-0' : 'p-4'}`}>
        <LeftColumn isPDF={isPDF} />
      </div>
      <div className={`w-3/4 flex flex-col ${isPDF ? 'p-4 text-xs' : 'p-4 text-xs'}`}>
        <RightColumn isPDF={isPDF} />
      </div>
    </div>
  </div>
));

MainComponent.displayName = 'MainComponent';

export default MainComponent;
