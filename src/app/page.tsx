// src/app/page.tsx
'use client';

import React from 'react';
import MainComponent from '../components/MainComponent';
import ClientOnly from '../components/ClientOnly';
import PrintButton from '../components/PrintButton';

export default function Home() {
  return (
    <div>
      <MainComponent isPDF={false} />
      <div className="fixed bottom-4 right-4">
        <ClientOnly>
          <PrintButton />
        </ClientOnly>
      </div>
    </div>
  );
}
