// src/components/MyDocument.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  leftColumn: {
    width: '20%',
    backgroundColor: '#22405C',
    color: 'white',
    padding: 10,
  },
  rightColumn: {
    width: '80%',
    padding: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <Text style={styles.text}>FABRICE MAGNAN DE BELLEVUE</Text>
        <Text style={styles.text}>Développeur Full Stack</Text>
        <Text style={styles.text}>📞 06 78 61 47 00</Text>
        <Text style={styles.text}>✉️ magnan.fabrice@gmail.com</Text>
        <Text style={styles.text}>📍 Bourg-Saint-Bernard</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.text}>EXPÉRIENCE</Text>
        <Text style={styles.text}>Développeur et Migrateur de données</Text>
        <Text style={styles.text}>SEPTEO ADB</Text>
        <Text style={styles.text}>11/2013 - 07/2023, Toulouse</Text>
        <Text style={styles.text}>{`Création d'un questionnaire métier au format web en autodidacte pour remplacer la version papier en utilisant HTML/JS/CSS/PHP.`}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
