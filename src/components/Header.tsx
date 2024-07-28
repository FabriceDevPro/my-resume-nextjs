// src/components/Header.tsx
import React from 'react';
import headerData from '../data/header.json';

const Header: React.FC = () => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold mb-1">{headerData.name}</h1>
      <h2 className="text-lg text-secondary mb-2">{headerData.title}</h2>
      <div className="flex items-center mb-1 space-x-4">
        <div className="flex items-center">
          <span className="mr-2">📞</span>
          <span>{headerData.contact.phone}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">✉️</span>
          <span>{headerData.contact.email}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">📍</span>
          <span>{headerData.contact.location}</span>
        </div>
      </div>
      <div className="mb-2 flex items-center">
        <span className="mr-2">☆</span>
        <span>{headerData.note}</span>
      </div>
    </div>
  );
};

export default Header;
