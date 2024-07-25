import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">EXPÉRIENCE</h2>
      <ExperienceItem 
        role="Développeur et Migrateur de données"
        period="11/2013 - 07/2023"
        company="SEPTEO ADB"
        location="Toulouse"
        sections={[
          {
            title: "Développeur Web et VBA",
            details: [
              "Création d'un questionnaire métier au format web en autodidacte pour remplacer la version papier en utilisant HTML/JS/CSS/PHP :",
              "Création de la base de données",
              "Mise en place d'une authentification",
              "Relance automatique par mail",
              "Mise en place d'un export au format JSON pour importer dans un outil interne fonctionnant avec VB.NET",
            ]
          },
          {
            title: "Création d'outils en VBA Excel en autodidacte",
            details: [
              "Réalisation d'un programme pour l'automatisation de contrôles comptables spécialisés",
              "Réalisation d'un programme pour définir le temps nécessaire pour réaliser une migration concurrente",
              "Réalisation d'un programme pour automatiser la génération d'un rapport d'analyse",
            ]
          },
          {
            title: "Apprentissage du VB.NET et participation aux débogages d'outils internes liés au service",
            details: [
              "Code review et ajout de nouvelles fonctionnalités",
              "Planification sous forme de sprints",
              "Utilisation de Git",
            ]
          },
          {
            title: "Processus Agiles",
            details: [
              "Gestion des tickets/issues retour client ou internes dans Azure DevOps",
              "Apprentissage et utilisation de Git dans Azure avec la gestion de différents projets et des branches",
              "Participation aux réunions quotidiennes",
            ]
          },
          {
            title: "Compétences Obtenues",
            details: [
              "JS, PHP, GIT, Azure, Gestion des branches, Manipulation fichier JSON, VBA sous Excel, Création de requêtes sous SQL, Méthode Agile",
            ]
          },
        ]}
      />
      <ExperienceItem 
        role="Technicien support Niveau 1 et 2"
        period="12/2010 - 11/2013"
        company="Computacenter (sous-traitant chez Astrium)"
        location="Toulouse"
        sections={[
          {
            title: "Support N1",
            details: [
              "Dépannage et Assistance à l'utilisation des postes de travail (mot de passe oublié)",
              "Création, Modification, Suppression des comptes utilisateurs dans la console AD",
              "Transmission au support des tickets spécifiques à un logiciel interne",
              "Rédaction de la base de connaissance",
              "Formation des nouveaux arrivants",
              "Prise en main à distance",
            ]
          },
          {
            title: "Support N2",
            details: [
              "Assistance avancée sur le pack office",
              "Prise en main à distance",
            ]
          },
          {
            title: "Backup du Teamleader",
            details: [
              "Gestion de l'équipe",
              "Gestion des problèmes généraux et suivi",
              "Suivi du traitement des appels",
              "Mise en place des statistiques pour le service",
            ]
          },
        ]}
      />
      <ExperienceItem 
        role="Technicien support"
        period="08/2010 - 12/2010"
        company="SCC"
        location="Toulouse"
        sections={[
          {
            title: "Support N1",
            details: [
              "Assistance et Dépannage des utilisateurs du C.H.U de Toulouse à l’utilisation des applications propres à