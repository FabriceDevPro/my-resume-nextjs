// src/components/PDFDownload.tsx
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const PDFDownload = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default PDFDownload;
