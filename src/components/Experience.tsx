// src/components/Experience.tsx
import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => {
  return (
    <div className="mb-4"> {/* Réduire la marge inférieure */}
      <h2 className="text-lg font-normal mb-2 border-b-4 border-gray-300 pb-1">EXPÉRIENCE</h2> {/* Réduire la taille de la police et les marges */}
      <ExperienceItem 
        role="Développeur et Migrateur de données"
        period="11/2013 - 07/2023"
        company="SEPTEO ADB (Editeur de Logiciel dans l'Immobilier)"
        location="Toulouse"
        sections={[
          {
            subtitle: "Développeur Web et VBA",
            details: [
              {
                title: "Création d'un questionnaire métier au format web en autodidacte pour remplacer la version papier en utilisant HTML/JS/CSS/PHP :",
                items: [
                  "Création de la base de données",
                  "Mise en place d'une authentification",
                  "Relance automatique par mail",
                  "Mise en place d'un export au format JSON pour importer dans un outil interne fonctionnant avec VB.NET",
                ]
              },
              {
                title: "Création d'outils en VBA Excel en autodidacte :",
                items: [
                  "Réalisation d'un programme pour l'automatisation de contrôles comptables spécialisés",
                  "Réalisation d'un programme pour définir le temps nécessaire pour réaliser une migration concurrente",
                  "Réalisation d'un programme pour automatiser la génération d'un rapport d'analyse",
                ]
              },
              {
                title: "Apprentissage du VB.NET et participation aux débogages d'outils internes liés au service :",
                items: [
                  "Code review et ajout de nouvelles fonctionnalités",
                  "Planification sous forme de sprints",
                  "Utilisation de Git",
                ]
              },
              {
                title: "Processus Agiles :",
                items: [
                  "Gestion des tickets/issues retour client ou internes dans Azure DevOps",
                  "Apprentissage et utilisation de Git dans Azure avec la gestion de différents projets et des branches",
                  "Participation aux réunions quotidiennes",
                ]
              },
              {
                title: "Compétences Obtenues :",
                items: [
                  "JS, PHP, GIT, Azure, Gestion des branches, Manipulation fichier JSON, VBA sous Excel, Création de requêtes sous SQL, Méthode Agile",
                ]
              },
            ]
          },
          {
            subtitle: "Migrateur de Données",
            details: [
              {
                title: "Transfert des données des anciens logiciels des clients vers la nouvelle gamme de logiciels, garantissant l'intégrité et la précision des données tout au long du processus :",
                items: [
                  "Analyse des besoins métier des clients pour assurer une migration des données qui réponde aux exigences spécifiques de chaque organisation",
                  "Utilisation d'Excel, JSON et TXT pour traiter et manipuler les données à migrer, en garantissant leur exactitude et leur cohérence",
                  "Utilisation de SQL Server pour exécuter des requêtes, extraire et transformer les données nécessaires pour la migration",
                  "Collaboration étroite avec les équipes de développement et de support pour résoudre les problèmes techniques et optimiser le processus de migration",
                ]
              },
            ]
          },
          {
            subtitle: "Technicien Support",
            details: [
              {
                title: "Support aux utilisateurs métiers et techniques pour différents logiciels de la gamme SDGI :",
                items: [
                  "Gérance locative",
                  "Syndic de copropriété",
                  "Location saisonnière",
                  "Etat des lieux",
                ]
              },
              {
                title: "Installation des logiciels et dépannage pour les mises à jour ou bugs :",
                items: [
                  "Réalisation de documentations support interne et externe",
                  "Intervention dans la base de données pour effectuer les corrections",
                  "Ouverture de tickets pour le développement afin de signaler des bugs ou des demandes de mise à jour",
                  "Prise en main à distance Teamviewer",
                ]
              },
            ]
          },
        ]}
      />
      
    </div>
  );
};

export default Experience;
