// src/components/PrintButton.tsx
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintableComponent from './PrintableComponent';

const PrintButton: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded shadow">
        Print this out!
      </button>
      <div style={{ display: 'none' }}>
        <PrintableComponent ref={componentRef} />
      </div>
    </div>
  );
};

export default PrintButton;
