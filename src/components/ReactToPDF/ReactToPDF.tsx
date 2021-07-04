import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { PDFDownloadLink, Page, Document } from '@react-pdf/renderer';

const MyDoc: React.FC = () => (
  <Document>
    <Page></Page>
  </Document>
);

export const ReactToPDF: React.FC = () => {
  return (
    <Button>
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </Button>
  );
};
