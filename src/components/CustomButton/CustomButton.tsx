import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    variant: 'Github' | 'Frontend Mentor' | 'Twitter' | 'Linkedln' | 'YouTube' | 'Facebook' | 'Twitch' | 'Dev.to' | 'Codewars' | 'Codepen' | 'freeCodeCamp' | 'GitLab' | 'Hashnode' | 'Stack Overflow';
    url: string;
}

const buttonStyles: { [key: string]: string } = {
    'Github': 'bg-black text-white',
    'Frontend Mentor': 'bg-blue-600 text-white',
    'Twitter': 'bg-blue-400 text-white',
    'Linkedln': 'bg-blue-700 text-white',
    'YouTube': 'bg-red-600 text-white',
    'Facebook': 'bg-blue-500 text-white',
    'Twitch': 'bg-purple-600 text-white',
    'Dev.to': 'bg-gray-800 text-white',
    'Codewars': 'bg-red-700 text-white',
    'Codepen': 'bg-black text-white',
    'freeCodeCamp': 'bg-green-600 text-white',
    'GitLab': 'bg-orange-500 text-white',
    'Hashnode': 'bg-blue-500 text-white',
    'Stack Overflow': 'bg-orange-600 text-white',
};

const buttonIcons: { [key: string]: string } = {
    'Github': '/icons/github.svg',
    'Frontend Mentor': '/icons/frontend-mentor.svg',
    'Twitter': '/icons/twitter.svg',
    'Linkedln': '/icons/linkedin.svg',
    'YouTube': '/icons/youtube.svg',
    'Facebook': '/icons/facebook.svg',
    'Twitch': '/icons/twitch.svg',
    'Dev.to': '/icons/devto.svg',
    'Codewars': '/icons/codewars.svg',
    'Codepen': '/icons/codepen.svg',
    'freeCodeCamp': '/icons/freecodecamp.svg',
    'GitLab': '/icons/gitlab.svg',
    'Hashnode': '/icons/hashnode.svg',
    'Stack Overflow': '/icons/stackoverflow.svg',
};

const CustomButton: React.FC<ButtonProps> = ({ variant, url }) => {
    const styles = buttonStyles[variant];
    const icon = buttonIcons[variant];

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-full p-3 rounded-md ${styles}`}>
            {icon && <Image src={icon} alt={`${variant} icon`} width={24} height={24} className="mr-2" />}
            <span>{variant}</span>
        </a>
    );
};

export default CustomButton;
