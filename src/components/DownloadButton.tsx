import React from 'react';

const DownloadButton: React.FC = () => {
  const handleClick = async () => {
    const response = await fetch('/api/generate-pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    a.click();
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded shadow">
      Download PDF
    </button>
  );
};

export default DownloadButton;
