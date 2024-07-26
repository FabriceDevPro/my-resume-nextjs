'use client';

import Link from 'next/link';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import ClientOnly from '../components/ClientOnly';
import PDFDownload from '../components/PDFDownload';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-screen-xl mx-auto bg-white shadow-md flex">
        <div className="w-1/5 bg-primary text-light border-r border-black flex flex-col">
          <LeftColumn />
        </div>
        <div className="w-4/5 flex flex-col">
          <RightColumn />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <ClientOnly>
          <PDFDownload />
        </ClientOnly>
      </div>
    </div>
  );
}
