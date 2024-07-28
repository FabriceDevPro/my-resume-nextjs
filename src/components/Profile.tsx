import React from 'react';
import Image from 'next/image';
import profilePic from '../assets/profil.jpg';
import profileData from '../data/profile.json';

const Profile: React.FC = () => {

  return (
    <div className="mb-8 text-white">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <Image 
          src={profilePic} 
          alt="Photo" 
          className="rounded-[5%]"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
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
