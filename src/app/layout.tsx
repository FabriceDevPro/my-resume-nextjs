import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "CV Fabrice Magnan de Bellevue",
  description: "Découvrez le CV complet de Fabrice Magnan de Bellevue, un développeur web full stack spécialisé en HTML, CSS, SASS, JavaScript, React, Vite.js, PHP, et PHPMyAdmin.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "CV Fabrice Magnan de Bellevue",
    description: "Le CV en ligne de Fabrice Magnan de Bellevue, développeur web full stack avec une expertise en HTML, CSS, SASS, JavaScript, React, Vite.js, PHP, et PHPMyAdmin.",
    url: "https://my-resume.fabwebprojects.fr/", 
    siteName: "CV de Fabrice Magnan de Bellevue",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV de Fabrice Magnan de Bellevue",
    description: "Le CV en ligne de Fabrice Magnan de Bellevue, développeur web full stack avec une expertise en HTML, CSS, SASS, JavaScript, React, Vite.js, PHP, et PHPMyAdmin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
