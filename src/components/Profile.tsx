import React from 'react';
import Image from 'next/image';
import profilePic from '../assets/profil.jpg';

const Profile: React.FC = () => {
  return (
    <div className="mb-8 text-white">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <Image 
          src={profilePic} 
          alt="Photo" 
          className="rounded-[5%]"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-sm font-medium mb-2">RÉSUMÉ</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      <p className="mb-2 text-xs text-left">
        {`Développeur web spécialisé en React et PHP avec 3 ans d'expérience, je suis issu d'une
        solide expérience en informatique qui a orienté ma reconversion vers ma passion pour le
        développement web.`}
      </p>
      <p className="mb-2 text-xs text-left">
        Agile dans la résolution de problèmes et créatif.
      </p>
      <p className="text-xs text-left">
        {`Mon parcours est marqué par une évolution constante et une quête d'excellence
        technologique.`}
      </p>
    </div>
  );
};

export default Profile;
