import React from 'react';
import Image from 'next/image';
import profileData from '../data/profile.json';

const Profile: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="mb-8 text-white">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <Image 
          src={`${basePath}/profil.jpg`} 
          alt="Photo" 
          className="rounded-[5%]"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-sm font-medium mb-2">RÉSUMÉ</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      <p className="mb-2 text-xs text-left">
        {profileData.summary}
      </p>
      {profileData.skills.map((skill, index) => (
        <p key={index} className="mb-2 text-xs text-left">
          {skill}
        </p>
      ))}
    </div>
  );
};

export default Profile;
