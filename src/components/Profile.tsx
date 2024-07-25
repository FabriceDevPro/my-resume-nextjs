import React from 'react';
import Image from 'next/image';
import profilePic from '../assets/profil.jpg';
const Profile: React.FC = () => {
  return (
    <div className="mb-8">
        <Image 
          src={profilePic} 
          alt="Photo" 
          className="rounded-full mx-auto mb-4"
          width={128} 
          height={128} 
        />
      <h2 className="text-lg font-bold mb-2">RÉSUMÉ</h2>
      <p className="mb-2">
        Développeur web spécialisé en React et PHP avec 3 ans d'expérience, je suis issu d'une
        solide expérience en informatique qui a orienté ma reconversion vers ma passion pour le
        développement web.
      </p>
      <p className="mb-2">
        Agile dans la résolution de problèmes et créatif.
      </p>
      <p>
        Mon parcours est marqué par une évolution constante et une quête d'excellence
        technologique.
      </p>
    </div>
  );
};

export default Profile;
