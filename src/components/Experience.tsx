import React from 'react';

interface SectionDetail {
  title: string;
  items: string[];
}

interface ExperienceSection {
  role: string;
  period: string;
  company: string;
  location: string;
  sections: {
    subtitle: string;
    details: SectionDetail[];
  }[];
}

const ExperienceItem: React.FC<ExperienceSection> = ({ role, period, company, location, sections }) => {
  return (
    <div className="mb-8 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between mb-1">
        <h3 className="font-semibold text-lg">{role}</h3>
        <span>{period}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-blue-500">{company}</span>
        <span className="text-black">{location}</span>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold italic underline mb-2">{section.subtitle}</h4>
          {section.details.map((detail, idx) => (
            <div key={idx} className="mb-2">
              <h5 className="font-semibold">{detail.title}</h5>
              <ul className="list-disc list-inside ml-4">
                {detail.items.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-normal mb-4 border-b-4 border-gray-300 pb-2">EXPÉRIENCE</h2>
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
      <ExperienceItem 
        role="Technicien Support"
        period="12/2010 - 11/2013"
        company="Computacenter (sous-traitant chez Astrium)"
        location="Toulouse"
        sections={[
          {
            subtitle: "Support N1",
            details: [
              {
                title: "",
                items: [
                  "Dépannage et Assistance à l'utilisation des postes de travail (mot de passe oublié)",
                  "Création, Modification, Suppression des comptes utilisateurs dans la console AD",
                  "Transmission au support des tickets spécifiques à un logiciel interne",
                  "Rédaction de la base de connaissance",
                  "Formation des nouveaux arrivants",
                  "Prise en main à distance",
                ]
              }
            ]
          },
          {
            subtitle: "Support N2",
            details: [
              {
                title: "",
                items: [
                  "Assistance avancée sur le pack office",
                  "Prise en main à distance",
                ]
              }
            ]
          },
          {
            subtitle: "Backup du Teamleader",
            details: [
              {
                title: "",
                items: [
                  "Gestion de l'équipe",
                  "Gestion des problèmes généraux et suivi",
                  "Suivi du traitement des appels",
                  "Mise en place des statistiques pour le service",
                ]
              }
            ]
          },
        ]}
      />
      <ExperienceItem 
        role="Technicien Support"
        period="08/2010 - 12/2010"
        company="SCC"
        location="Toulouse"
        sections={[
          {
            subtitle: "Support N1",
            details: [
              {
                title: "",
                items: [
                  "Assistance et Dépannage des utilisateurs du C.H.U de Toulouse à l’utilisation des applications propres à leurs travaux :",
                  "Accès aux applications",
                  "Outils de bureautique",
                  "Problèmes réseaux",
                  "Gestion des Files d’attente d’impression",
                ]
              }
            ]
          },
        ]}
      />
      <ExperienceItem 
        role="Technicien Support"
        period="10/2008 - 05/2010"
        company="Berger-Levrault"
        location="Labège"
        sections={[
          {
            subtitle: "Support N1",
            details: [
              {
                title: "",
                items: [
                  "Assistance et Dépannage des utilisateurs pour les logiciels de comptabilité publique, paye publique, gestion des administrés de la gamme wmagnus et emagnus pour les collectivités territoriales, les établissements du médico-social.",
                  "Sans prise en main à distance",
                  "Installation des logiciels à distance",
                ]
              }
            ]
          },
        ]}
      />
    </div>
  );
};

export default Experience;
